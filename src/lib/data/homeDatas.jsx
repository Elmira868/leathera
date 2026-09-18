import { RiTelegram2Fill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

export const socialLinks = [
  {
    name: "Telegram",
    icon: <RiTelegram2Fill />,
  },
  {
    name: "Google",
    icon: <FaGooglePlusG />,
  },
  {
    name: "Instagram",
    icon: <RiInstagramFill />,
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
  },
];

export const account = [
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Forgotten Password",
    path: "/forget-password",
  },
];

export const information = [
  {
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
];

export const MenuItem = [
  {
    title: "Fashion",
    key: "fashion",
    items: [
      {
        title: "Clothing",
        items: [
          { title: "Ethnic Wear", path: "/ethnic-wear" },
          { title: "Sports Wear", path: "/sports-wear" },
          { title: "Lounge Wear", path: "/lounge-wear" },
          { title: "Trousers", path: "/trousers" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { title: "Luggage & Travel", path: "/luggage-travel" },
          { title: "Wallets & Belts", path: "/wallets-belts" },
          { title: "Handbags", path: "/handbags" },
          { title: "Printed Coat", path: "/printed-coat" },
        ],
      },
      {
        title: "Footwear",
        items: [
          { title: "Formal Shoes", path: "/formal-shoes" },
          { title: "Flip-Flops", path: "/flip-flops" },
          { title: "Sandals", path: "/sandals" },
          { title: "Sport Shoes", path: "/sport-shoes" },
        ],
      },
    ],
  },

  {
    title: "Artificial Leather",
    path: "/artificial-leather",
  },

  {
    title: "Faux Leather",
    path: "/leather",
  },

  {
    title: "Suede",
    path: "/suede",
  },

  {
    title: "Blogs",
    path: "/blogs",
  },
];

export const sidebarSections = [
  {
    title: "Account",
    items: account,
  },
  {
    title: "Information",
    items: information,
  },
];

export const categories = [
  {
    name: "Fashion",
    path: "/fashion",
  },
  {
    name: "Artificial Leather",
    path: "/artificial-leather",
  },
  {
    name: "Faux Leather",
    path: "/leather",
  },
  {
    name: "Suede",
    path: "/suede",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

export const filters = [
  {
    title: "Colors",
    key: "color",
    items: [
      { name: "Black", value: "#333" },
      { name: "Copper", value: "#a47148" },
      { name: " Earth-Brown", value: "#8b5e34" },
      { name: "Walnut", value: "#6f4518" },
    ],
  },
  {
    title: "Size",
    key: "size",
    items: [
      { name: "small", value: "small" },
      { name: "medium", value: "medium" },
      { name: "large", value: "large" },
    ],
  },
  {
    title: "Weight",
    key: "weight",
    items: [
      { name: "light", value: 5 },
      { name: "medium", value: 10 },
      { name: "heavy", value: 15 },
    ],
  },
];

export const bestSellerProducts = [
  {
    id: 1,
    name: "Classic Leather Bag",
    image: "/assets/products/product-1.jpg",
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Premium Leather Wallet",
    image: "/assets/products/product-2.jpg",
    price: 75,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Leather Shoulder Bag",
    image: "/assets/products/product-3.jpg",
    price: 150,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Classic Leather Belt",
    image: "/assets/products/product-4.jpg",
    price: 60,
    rating: 4.6,
  },
];

export default bestSellerProducts;
