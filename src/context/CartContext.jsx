import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CART_STORAGE_KEY = "leathera-cart";

const getStoredCart = () => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (product) => {
    if (!product) return;

    setCartItem((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItem((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// This hook must remain available from this module until consumers are migrated.
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};
