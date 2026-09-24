import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import Breadcrumb from "../../../components/Common/Breadcrumb.jsx";
import Loading from "../../../components/Common/Loading.jsx";
import Pagination from "../../../components/Common/Pagination.jsx";
import { MenuItem } from "../../../lib/constants.jsx";
import { supabase, supabaseConfigError } from "../../../lib/supabase.js";

import CategoryNavigation from "./CategoryNavigation.jsx";
import CategoryProductCard from "./CategoryProductCard.jsx";
import CategoryToolbar from "./CategoryToolbar.jsx";

const categoryItems = MenuItem.flatMap((menuItem) =>
  menuItem.items
    ? menuItem.items.flatMap((group) => group.items)
    : menuItem.path === "/blogs"
      ? []
      : [{ title: menuItem.title, path: menuItem.path }],
);
  const PRODUCTS_PER_PAGE = 4;

const normalizeProduct = (product, index) => ({
  ...product,
  id: product.id ?? `product-${index}`,
  name: product.name || product.title || "Product",
  image: product.image_url || product.image || product.thumbnail || "",
  rating: Number(product.rating ?? product.rating_avg ?? 0),
});

const matchesCategory = (product, categoryId) => {
  const values = [
    product.category,
    product.category_name,
    product.type,
    product.collection,
    product.slug,
  ].filter(Boolean);

  if (!values.length) return true;

  const normalizedCategory = categoryId.toLowerCase().replaceAll("-", " ");
  return values.some((value) =>
    String(value).toLowerCase().replaceAll("-", " ").includes(normalizedCategory),
  );
};

const CategoryPage = () => {
  const { pathname } = useLocation();
  const categoryId = pathname.slice(1);
  const category = categoryItems.find((item) => item.path === `/${categoryId}`);
  const title =
    category?.title || categoryId?.replaceAll("-", " ") || "Collection";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = [...products].sort((firstProduct, secondProduct) => {
    if (sortBy === "price-low") {
      return Number(firstProduct.price || 0) - Number(secondProduct.price || 0);
    }

    if (sortBy === "price-high") {
      return Number(secondProduct.price || 0) - Number(firstProduct.price || 0);
    }

    const soldDifference =
      Number(secondProduct.sold_count || 0) - Number(firstProduct.sold_count || 0);

    if (soldDifference !== 0) return soldDifference;

    return (
      new Date(secondProduct.created_at || 0).getTime() -
      new Date(firstProduct.created_at || 0).getTime()
    );
  });
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const visibleProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );
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
        const categoryProducts = normalizedProducts.filter((product) =>
          matchesCategory(product, categoryId),
        );

        setProducts(
          categoryProducts.length ? categoryProducts : normalizedProducts,
        );
        setCurrentPage(1);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="w-full overflow-hidden">
      <Breadcrumb />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 border-b border-gray-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-roboto-Medium uppercase tracking-[0.22em] text-primary">
              Leathera collection
            </p>
            <h1 className="font-roboto-Regular text-3xl capitalize text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Discover carefully selected pieces with timeless materials and a
              finish made for everyday use.
            </p>
          </div>
          <span className="text-sm text-gray-500">
            {!loading && !error ? `${products.length} products` : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <CategoryNavigation
            items={categoryItems}
            activePath={`/${categoryId}`}
          />

          <div>
            <CategoryToolbar
              sortBy={sortBy}
              onSortChange={(value) => {
                setSortBy(value);
                setCurrentPage(1);
              }}
            />

            {loading && <Loading className="min-h-64" />}

            {!loading && error && (
              <p className="py-16 text-center text-sm text-red-500">{error}</p>
            )}

            {!loading && !error && !products.length && (
              <p className="py-16 text-center text-sm text-gray-500">
                No products available in this category yet.
              </p>
            )}

            {!loading && !error && sortedProducts.length > 0 && (
              <>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                  {visibleProducts.map((product) => (
                    <CategoryProductCard key={product.id} product={product} />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
