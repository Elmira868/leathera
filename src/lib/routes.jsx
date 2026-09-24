import { createBrowserRouter } from "react-router";
import AppLayout from "../components/layouts/AppLayout.jsx";
import HomePage from "../pages/Home/HomePage.jsx";
import BlogsPage from "../pages/Blogs/BlogsPage.jsx";
import LoginPage from "../pages/Login/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import BlogDetailsPage from "../pages/Blogs/BlogDetailsPage.jsx";
import FeaturesDetails from "../pages/FeaturesDetails.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import CategoryPage from "../pages/Home/Category/CategoryPage.jsx";

const categoryPaths = [
  "/fashion",
  "/artificial-leather",
  "/leather",
  "/suede",
  "/ethnic-wear",
  "/sports-wear",
  "/lounge-wear",
  "/trousers",
  "/luggage-travel",
  "/wallets-belts",
  "/handbags",
  "/printed-coat",
  "/formal-shoes",
  "/flip-flops",
  "/sandals",
  "/sport-shoes",
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      ...categoryPaths.map((path) => ({ path, element: <CategoryPage /> })),
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/blogs/:blogId", element: <BlogDetailsPage /> },
      { path: "/features/:featuresId", element: <FeaturesDetails /> },
      { path: "/products/:productId", element: <ProductDetailsPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forget-password", element: <ForgotPasswordPage /> },
      { path: "/contact-us", element: <ContactPage /> },
    ],
  },
]);

export default router;
