
import { IoIosClose } from "react-icons/io";

import { useCart } from "../../../../../context/CartContext";

import Button from "../../../Button";

const CheckOut = ({ onClose }) => {
  const { cartItem, removeFromCart } = useCart();

  const total = cartItem.reduce(
    (sum, item) => sum + (Number.parseFloat(item.price) || 0),
    0,
  );

  return (
    <div
      className="
        absolute
        right-0
        top-full
        z-70
        mt-2

        w-[calc(100vw-2rem)]
        max-w-80

        overflow-hidden
        rounded-md
        border
        border-gray-200
        bg-white
        shadow-lg

        sm:w-80
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <h2 className="font-roboto-Medium text-sm uppercase">
          Shopping cart
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close cart"
          className="
            flex
            size-7
            shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-full
            text-gray-500
            transition-colors
            hover:bg-gray-100
            hover:text-gray-800
          "
        >
          <IoIosClose className="text-2xl" />
        </button>
      </div>

      {/* Cart Content */}
      {cartItem.length === 0 ? (
        <p className="px-4 py-8 text-center text-sm text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* Products */}
          <div className="max-h-[50vh] overflow-y-auto px-4 py-2 sm:max-h-64">
            {cartItem.map((item, index) => (
              <div
                key={`${item.id ?? item.name ?? "item"}-${index}`}
                className="flex items-center gap-2 border-b border-gray-100 py-3 last:border-b-0 sm:gap-3"
              >
                {/* Image */}
                <img
                  className="
                    size-11
                    shrink-0
                    object-contain
                    sm:size-12
                  "
                  src={
                    item.image_url ||
                    item.image ||
                    "/assets/static/logo.png"
                  }
                  alt={item.name || item.title || "Product"}
                />

                {/* Product Info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs text-gray-700 sm:text-sm">
                    {item.name || item.title || "Product"}
                  </p>

                  <p className="mt-0.5 text-xs text-primary">
                    {item.price ?? 0}$
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => removeFromCart(index)}
                  aria-label={`Remove ${
                    item.name || item.title || "product"
                  }`}
                  className="
                    flex
                    size-7
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    transition-colors
                    hover:bg-gray-100
                  "
                >
                  <IoIosClose className="text-xl text-gray-400 transition-colors hover:text-red-500" />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-4 py-3">
            <div className="mb-3 flex items-center justify-between gap-2 text-sm font-semibold">
              <span>Total</span>

              <span className="text-primary">
                {total.toFixed(2)}$
              </span>
            </div>

            <Button className="w-full">
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;

