import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import ProductsSlider from "../../../components/Common/Slider/ProductsSliderBox";
import TabTitle from "../../../components/Common/TabsSlider/TabTitle";
import Loading from "../../../components/Common/Loading";

import { supabase } from "../../../lib/supabase";

const normalizeFeatures = (items = []) =>
  items.map((feature) => ({
    ...feature,
    id: feature.id,
    name: feature.title || feature.name || "Featured Item",
    image_url: feature.image_url || feature.image || feature.img,
    price: feature.price ?? feature.amount ?? "Price on request",
  }));

const renderFeatureItem = (feature) => (
  <Link
    to={`/features/${encodeURIComponent(feature.id)}`}
    className="group mx-8 mt-5 flex h-full cursor-pointer flex-col overflow-hidden bg-white"
  >
    <div className="flex h-52 w-full items-center justify-center overflow-hidden border border-gray-400 p-5 sm:h-56 md:h-60">
      {feature.image_url ? (
        <img
          src={feature.image_url}
          alt={feature.name}
          className="h-64 w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
          Feature
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col px-4 py-4 text-center sm:px-5">
      <h3 className="line-clamp-2 min-h-12 text-sm font-roboto-Light leading-6 text-gray-500 transition-colors group-hover:text-primary sm:text-base">
        {feature.name}
      </h3>
      <p className="mt-2 text-sm font-semibold text-primary sm:text-base">
        {feature.price}
        {typeof feature.price === "number" ? "$" : ""}
      </p>
      <span className="mx-auto mt-2 w-fit text-sm text-zinc-900 transition-colors group-hover:text-primary">
        View details
      </span>
    </div>
  </Link>
);

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
    return <Loading className="min-h-48" />;
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
          renderItem={renderFeatureItem}
          slidesPerView={3}
          spaceBetween={24}
        />
      </div>
    </div>
  );
};

export default Features;