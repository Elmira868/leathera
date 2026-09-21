import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

import { supabase, supabaseConfigError } from "../lib/supabase";

import Loading from "../components/Common/Loading";
import Breadcrumb from "../components/Common/Breadcrumb";

const FeaturesDetails = () => {
  const { featuresId } = useParams();

  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeature = async () => {
      setLoading(true);
      setError(null);

      if (!supabase) {
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("features")
        .select("*")
        .eq("id", featuresId)
        .single();

      if (fetchError) {
        setError(fetchError.message);
      } else if (!data) {
        setError("This feature could not be found.");
      } else {
        setFeature(data);
      }

      setLoading(false);
    };

    fetchFeature();
  }, [featuresId]);

  if (loading) {
    return <Loading className="min-h-[50vh]" />;
  }

  if (error) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm text-red-500">{error}</p>

        <Link
          to="/"
          className="mt-4 text-sm font-medium text-primary transition-colors hover:underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  const title = feature.title || feature.name || "Featured item";

  const image = feature.image_url || feature.image || feature.img || "";

  const description =
    feature.description || feature.content || feature.body || "";

  return (
    <>
      <Breadcrumb />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="flex min-h-[280px] items-center justify-center bg-gray-50 p-5 sm:min-h-[400px] sm:p-8 lg:min-h-[520px]">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="h-full max-h-[500px] w-full rounded-xl object-contain"
                />
              ) : (
                <div className="flex min-h-[240px] w-full items-center justify-center rounded-xl bg-gray-100">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    No image
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Featured
              </span>

              <h1 className="mt-3 text-2xl font-medium leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {title}
              </h1>

              {description && (
                <p className="mt-6 whitespace-pre-line text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                  {description}
                </p>
              )}

              {/* Price */}
              {feature.price != null && (
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                    Price
                  </span>

                  <p className="mt-2 text-xl font-semibold text-primary sm:text-2xl">
                    {feature.price}
                  </p>
                </div>
              )}

              {/* Add to Cart */}
              <button
                type="button"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:w-fit sm:min-w-52"
              >
                <FiShoppingCart className="text-lg" />
                <span>Add to Cart</span>
              </button>

              {/* Back to Home */}
              <Link
                to="/"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition-colors duration-300 hover:border-primary hover:text-primary sm:w-fit sm:min-w-52"
              >
                Back to home
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default FeaturesDetails;
