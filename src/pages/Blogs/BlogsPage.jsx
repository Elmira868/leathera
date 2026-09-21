import { useEffect, useState } from "react";
import { Link } from "react-router";

import Breadcrumb from "../../components/Common/Breadcrumb";
import Loading from "../../components/Common/Loading";
import { supabase, supabaseConfigError } from "../../lib/supabase";

const normalizeBlog = (blog, index) => ({
  ...blog,
  id: blog.id ?? `blog-${index}`,
  title: blog.title || blog.name || blog.blog_title || "Untitled blog",
  image: blog.image_url || blog.image || blog.cover || blog.thumbnail || "",
  description: blog.description || blog.excerpt || blog.summary || "",
  author: blog.author || "Leathera Team",
});

const BlogCard = ({ blog }) => (
  <Link
    to={`/blogs/${encodeURIComponent(blog.id)}`}
    className="group flex h-full flex-col overflow-hidden border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg"
  >
    <div className="flex h-56 items-center justify-center overflow-hidden bg-gray-100 sm:h-64">
      {blog.image ? (
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
          Blog
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-5">
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
        {blog.author}
      </span>
      <h2 className="mt-3 line-clamp-2 text-lg leading-7 text-gray-800">
        {blog.title}
      </h2>
      {blog.description && (
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {blog.description}
        </p>
      )}
      <span className="mt-auto pt-5 text-sm font-medium text-zinc-900 transition-colors group-hover:text-primary">
        Read more
      </span>
    </div>
  </Link>
);

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError("");

      if (!supabase) {
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("blogs")
        .select("*")
        .order("id");

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setBlogs((data || []).map(normalizeBlog));
      }

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Breadcrumb />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="border-b border-gray-200 pb-5">
          <h1 className="text-2xl text-gray-800 sm:text-3xl">Blogs</h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover the latest stories, ideas, and leather guides.
          </p>
        </div>

        {loading && <Loading className="min-h-64" />}

        {!loading && error && (
          <div className="py-16 text-center text-sm text-red-500">{error}</div>
        )}

        {!loading && !error && !blogs.length && (
          <div className="py-16 text-center text-sm text-gray-500">
            No blogs available yet.
          </div>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default BlogsPage;
