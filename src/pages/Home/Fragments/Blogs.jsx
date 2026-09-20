
import { useEffect, useRef, useState } from "react";

import ProductsSlider from "../../../components/Common/Slider/ProductsSliderBox";
import TabTitle from "../../../components/Common/TabsSlider/TabTitle";
import { supabase, supabaseConfigError } from "../../../lib/supabase";

const normalizeBlogs = (items = []) =>
  items.map((blog, index) => ({
    ...blog,
    id: blog.id ?? blog.slug ?? `${blog.title ?? "blog"}-${index}`,
    name: blog.title || blog.name || "Untitled blog",
    image_url: blog.image_url || blog.image || blog.cover || blog.thumbnail || "",
    description: blog.description || blog.excerpt || blog.summary || "",
    author: blog.author || "Leathera Team",
    slug: blog.slug || "",
  }));

const renderBlogItem = (blog) => (
  <div className="group mt-5 mx-8 flex h-full cursor-pointer flex-col overflow-hidden bg-white">
    <div className="flex h-52 w-full items-center justify-center overflow-hidden border border-gray-400 bg-gray-100 sm:h-56 md:h-60">
      {blog.image_url ? (
        <img
          src={blog.image_url}
          alt={blog.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm uppercase tracking-[0.2em] text-gray-400">
          Blog
        </div>
      )}
    </div>

    <div className="flex flex-1 flex-col px-4 py-4 text-left sm:px-5">
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
        {blog.author}
      </span>
      <h4 className="mt-3 line-clamp-1 min-h-12 text-sm font-roboto-Regular leading-6 text-second sm:text-base">
        {blog.name}
      </h4>
      {blog.description ? (
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500 sm:text-sm">
          {blog.description}
        </p>
      ) : null}
      <button className="mt-4 w-fit border-none bg-transparent p-0 text-sm font-medium text-zinc-900 hover:text-primary">
        Read more
      </button>
    </div>
  </div>
);

const Blogs = () => {
  const productSliderRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      if (!supabase) {
        setBlogs([]);
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.from("blogs").select("*").order("id");

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      setBlogs(normalizeBlogs(data || []));
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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