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
    path: "/fashin",
  },
  {
    name: "Artificial Leather",
    path: "/artificial-leather",
  },
  {
    name: "Faux Leather",
    path: "/faux-leather",
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
