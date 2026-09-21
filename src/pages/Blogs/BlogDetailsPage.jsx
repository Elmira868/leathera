import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import Loading from "../../components/Common/Loading";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { supabase, supabaseConfigError } from "../../lib/supabase";

const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      if (!supabase) {
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", blogId)
        .single();

      if (fetchError) {
        setError(fetchError.message);
      } else if (!data) {
        setError("This blog could not be found.");
      } else {
        setBlog(data);
      }

      setLoading(false);
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <Loading className="min-h-[50vh]" />;
  }

  if (error) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <p className="text-red-500">{error}</p>
        <Link to="/blogs" className="mt-4 text-primary hover:underline">
          Back to blogs
        </Link>
      </div>
    );
  }

  const titleValue = blog.title || blog.name || blog.blog_title;
  const title = typeof titleValue === "string" && titleValue.trim()
    ? titleValue
    : "Untitled blog";
  const contentValue =
    blog.content || blog.body || blog.description || blog.excerpt;
  const content = typeof contentValue === "string" ? contentValue : "";
  const image = blog.image_url || blog.image || blog.cover || blog.thumbnail;

  return (
    <>
      <Breadcrumb currentPage={title} />
      <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {image && (
          <img
            src={image}
            alt={title}
            className="max-h-128 w-full object-cover"
          />
        )}
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {blog.author || "Leathera Team"}
          </p>
          <h1 className="mt-3 text-2xl text-gray-800 sm:text-4xl">
            {title}
          </h1>
          <div className="mt-6 whitespace-pre-line text-sm leading-7 text-gray-600 sm:text-base">
            {content || "This blog has no content yet."}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetailsPage;