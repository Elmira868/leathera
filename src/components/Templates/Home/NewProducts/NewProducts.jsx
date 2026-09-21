import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import ProductsSlider from "../../../Common/Slider/ProductsSliderBox";
import TabsSlider from "../../../Common/TabsSlider/TabsSlider";
import Loading from "../../../Common/Loading";

import { supabase } from "../../../../lib/supabase";

const normalizeProducts = (items = []) =>
  items.map((product) => ({
    ...product,
    name: product.name || product.title || "Product",
    image_url: product.image_url || product.image || "",
  }));

const renderProductItem = (product) => (
  <Link
    to={`/products/${encodeURIComponent(product.id)}`}
    className="group mt-5 mx-8 flex h-full cursor-pointer flex-col overflow-hidden bg-white"
  >
    <div className="flex h-52 w-full items-center justify-center overflow-hidden border border-gray-400 p-5 sm:h-56 md:h-60">
      {product.image_url ? (
        <img
          src={product.image_url}
          alt={product.name}
          className="h-64 w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
          Product
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col px-4 py-4 text-center sm:px-5">
      <h3 className="line-clamp-2 min-h-12 text-sm font-roboto-Light leading-6 text-gray-500 transition-colors group-hover:text-primary sm:text-base">
        {product.name}
      </h3>
      <p className="mt-2 text-sm font-semibold text-primary sm:text-base">
        {product.price ?? "Price on request"}$
      </p>
      <span className="mx-auto mt-2 w-fit text-sm text-zinc-900 transition-colors group-hover:text-primary">
        View details
      </span>
    </div>
  </Link>
);
const productTabs = [
  { id: "best-selling", label: "Best Seller" },
  { id: "special", label: "Special" },
  { id: "latest", label: "Latest" },
];

const NewProducts = () => {
  const productSliderRef = useRef(null);

  const [activeTab, setActiveTab] = useState(productTabs[0].id);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      if (!supabase) {
        setProducts([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      setProducts(normalizeProducts(data));
      setLoading(false);
    };

    fetchProducts();
  }, []);

  let currentProducts = [];

  if (activeTab === "best-selling") {
    currentProducts = [...products]
      .sort((a, b) => b.sold_count - a.sold_count)
      .slice(0, 6);
  }

  if (activeTab === "special") {
    currentProducts = products
      .filter((product) => product.is_special === true)
      .slice(0, 6);
  }

  if (activeTab === "latest") {
    currentProducts = [...products]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 6);
  }

  if (loading) {
    return <Loading className="min-h-48" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <TabsSlider
        title="New Product"
        tabs={productTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        swiperRef={productSliderRef}
      />

      <ProductsSlider
        swiperRef={productSliderRef}
        items={currentProducts}
        renderItem={renderProductItem}
      />
    </div>
  );
};

export default NewProducts;
