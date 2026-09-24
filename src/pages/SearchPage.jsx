import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import Breadcrumb from "../components/Common/Breadcrumb.jsx";
import Loading from "../components/Common/Loading.jsx";
import CategoryProductCard from "./Home/Category/CategoryProductCard.jsx";
import { supabase, supabaseConfigError } from "../lib/supabase.js";

const normalizeProduct = (product, index) => ({
  ...product,
  id: product.id ?? `product-${index}`,
  name: product.name || product.title || "Product",
  image: product.image_url || product.image || product.thumbnail || "",
  rating: Number(product.rating ?? product.rating_avg ?? 0),
});

const matchesQuery = (product, query) => {
  const searchableText = [
    product.name,
    product.title,
    product.category,
    product.category_name,
    product.description,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchableText.includes(query.toLowerCase());
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      if (!supabase) {
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("products")
        .select("*");

      if (fetchError) {
        setError(fetchError.message);
      } else {
        const normalizedProducts = (data || []).map(normalizeProduct);
        setProducts(
          query
            ? normalizedProducts.filter((product) => matchesQuery(product, query))
            : normalizedProducts,
        );
      }

      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  return (
    <>
      <Breadcrumb />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-xs font-roboto-Medium uppercase tracking-[0.22em] text-primary">
            Product search
          </p>
          <h1 className="mt-2 text-2xl capitalize text-gray-900 sm:text-3xl">
            {query ? `Results for “${query}”` : "All products"}
          </h1>
          {!loading && !error && (
            <p className="mt-2 text-sm text-gray-500">
              {products.length} {products.length === 1 ? "product" : "products"} found
            </p>
          )}
        </div>

        {loading && <Loading className="min-h-64" />}

        {!loading && error && (
          <p className="py-16 text-center text-sm text-red-500">{error}</p>
        )}

        {!loading && !error && !products.length && (
          <p className="py-16 text-center text-sm text-gray-500">
            No products matched your search.
          </p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <CategoryProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default SearchPage;
