import { useEffect, useRef, useState } from "react";

import ProductsSlider from "../../../Common/Slider/ProductsSliderBox";
import TabsSlider from "../../../Common/TabsSlider/TabsSlider";

import { supabase } from "../../../../lib/supabase";

const normalizeProducts = (items = []) =>
  items.map((product) => ({
    ...product,
    image: product.image_url,
  }));
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
    return <div>Loading...</div>;
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

      <ProductsSlider swiperRef={productSliderRef} items={currentProducts} />
    </div>
  );
};

export default NewProducts;
