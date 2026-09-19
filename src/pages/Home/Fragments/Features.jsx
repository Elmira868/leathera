import { useEffect, useRef, useState } from "react";

import ProductsSlider from "../../../components/Common/Slider/ProductsSliderBox";
import TabTitle from "../../../components/Common/TabsSlider/TabTitle";

import { supabase } from "../../../lib/supabase";

const normalizeFeatures = (items = []) =>
  items.map((feature) => ({
    ...feature,
    id: feature.id,
    name: feature.title || feature.name || "Featured Item",
    image_url: feature.image_url || feature.image || feature.img,
    price: feature.price ?? feature.amount ?? "Price on request",
  }));

const Features = () => {
  const productSliderRef = useRef(null);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      setLoading(true);
      setError(null);

      if (!supabase) {
        setFeatures([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.from("features").select("*").order("id");

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      setFeatures(normalizeFeatures(data || []));
      setLoading(false);
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!features.length) {
    return null;
  }

  return (
    <div className="mt-8 sm:mt-10">
      <div className="mx-8 flex items-center justify-between overflow-hidden border border-gray-300">
        <div className="shrink-0">
          <TabTitle>Features</TabTitle>
        </div>
      </div>

      <div className="mt-4">
        <ProductsSlider
          swiperRef={productSliderRef}
          items={features}
          slidesPerView={3}
          spaceBetween={24}
        />
      </div>
    </div>
  );
};

export default Features;