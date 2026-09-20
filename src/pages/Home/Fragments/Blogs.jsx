
import { useEffect, useRef, useState } from "react";

import ProductsSlider from "../../../components/Common/Slider/ProductsSliderBox";

import TabTitle from "../../../components/Common/TabsSlider/TabTitle";

import { supabase, supabaseConfigError } from "../../../lib/supabase";

// Normalize blog data to ensure consistent properties for the UI
const normalizeBlogs = (items = []) =>
  items.map((blog, index) => ({
    ...blog,

    // Provide a fallback ID if the blog does not have one
    id: blog.id ?? blog.slug ?? `blog-${index}`,

    // Use title as the main display name
    name: blog.title || blog.name || "Untitled blog",

    // Support different possible image field names
    image_url:
      blog.image_url ||
      blog.image ||
      blog.cover ||
      blog.thumbnail ||
      "",

    // Support different possible description field names
    description:
      blog.description ||
      blog.excerpt ||
      blog.summary ||
      "",

    // Use a default author when no author is provided
    author: blog.author || "Leathera Team",

    // Keep the slug for future blog detail pages
    slug: blog.slug || "",
  }));

// Render a single blog card inside the slider
const renderBlogItem = (blog) => (
  <div className="group mt-5 mx-8 flex h-full cursor-pointer flex-col overflow-hidden bg-white">
    <div className="flex h-52 w-full items-center justify-center overflow-hidden border border-gray-400 bg-gray-100 sm:h-56 md:h-60">
      {blog.image_url ? (
        <img
          src={blog.image_url}
          alt={blog.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          // Hide the image if it fails to load
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        // Display a fallback when no blog image is available
        <div className="flex h-full w-full items-center justify-center text-sm uppercase tracking-[0.2em] text-gray-400">
          Blog
        </div>
      )}
    </div>

    <div className="flex flex-1 flex-col px-4 py-4 text-left sm:px-5">
      {/* Display the blog author */}
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
        {blog.author}
      </span>

      {/* Display the blog title */}
      <h4 className="mt-3 line-clamp-2 min-h-12 text-sm font-roboto-Light leading-6 text-gray-700 sm:text-base">
        {blog.name}
      </h4>

      {/* Display the description only when it exists */}
      {blog.description ? (
        <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-500 sm:text-sm">
          {blog.description}
        </p>
      ) : null}

      {/* TODO: Navigate to the blog detail page */}
      <button className="mt-4 w-fit border-none bg-transparent p-0 text-sm font-medium text-zinc-900 hover:text-primary">
        Read more
      </button>
    </div>
  </div>
);

const Blogs = () => {
  // Store the slider reference for Swiper controls
  const productSliderRef = useRef(null);

  // Store the fetched blog data
  const [blogs, setBlogs] = useState([]);

  // Track the loading state
  const [loading, setLoading] = useState(true);

  // Store any error message from Supabase
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      // Check whether Supabase is properly configured
      if (!supabase) {
        setBlogs([]);
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }

      // Fetch blogs from Supabase and sort them by ID
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("id");

      // Handle Supabase errors
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      // Normalize and store the fetched blog data
      setBlogs(normalizeBlogs(data || []));
      setLoading(false);
    };

    // Fetch blogs when the component mounts
    fetchBlogs();
  }, []);

  // Display a loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display the error message when fetching fails
  if (error) {
    return <div>{error}</div>;
  }

  // Hide the section when there are no blogs
  if (!blogs.length) {
    return null;
  }

  return (
    <div className="mt-8 sm:mt-10">
      <div className="mx-8 flex items-center justify-between overflow-hidden border border-gray-300">
        <div className="shrink-0">
          <TabTitle>Blogs</TabTitle>
        </div>
      </div>

      <div className="mt-4">
        {/* Reuse the common slider component to display blog cards */}
        <ProductsSlider
          swiperRef={productSliderRef}
          items={blogs}
          renderItem={renderBlogItem}
          slidesPerView={3}
          spaceBetween={24}
        />
      </div>
    </div>
  );
};

export default Blogs;

