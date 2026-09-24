import { Link } from "react-router";

import RatingStars from "../../../components/Common/RatingStars.jsx";

const formatCategory = (category) =>
  category ? category.replaceAll("_", " ") : "Leather goods";

const CategoryProductCard = ({ product }) => (
  <Link
    to={`/products/${encodeURIComponent(product.id)}`}
    className="group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-second hover:shadow-[0_14px_35px_rgba(93,55,31,0.12)]"
  >
    <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#f7f3ef] p-4 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),transparent_55%)]" />
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="relative h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
      ) : (
        <span className="relative text-center text-xs uppercase tracking-[0.18em] text-primary/70">
          Leathera
        </span>
      )}
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-roboto-Medium uppercase tracking-wider text-primary shadow-sm">
        {formatCategory(product.category)}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-4 sm:p-5">
      <h2 className="line-clamp-2 min-h-10 text-sm leading-5 text-gray-800 transition-colors group-hover:text-primary sm:text-base">
        {product.name}
      </h2>
      <div className="mt-2 flex items-center justify-between gap-2">
        <RatingStars rating={product.rating} />
        <span className="text-[11px] text-gray-400">View details</span>
      </div>
      <div className="mt-auto flex items-end justify-between gap-2 border-t border-gray-100 pt-3">
        <span className="text-base font-roboto-Medium text-primary sm:text-lg">
          {product.price != null ? `${product.price}$` : "Price on request"}
        </span>
        <span
          aria-hidden="true"
          className="text-lg text-primary transition-transform duration-300 group-hover:translate-x-1"
        >
          -&gt;
        </span>
      </div>
    </div>
  </Link>
);

export default CategoryProductCard;
