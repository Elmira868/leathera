import { createBrowserRouter } from "react-router";
import AppLayout from "../components/layouts/AppLayout.jsx";
import FashionPage from "../pages/FashionPage.jsx";
import HomePage from "../pages/Home/HomePage.jsx";
import BlogsPage from "../pages/Blogs/BlogsPage.jsx";
import SuedePage from "../pages/SuedePage.jsx";
import LeathersPage from "../pages/LeathersPage.jsx";
import LoginPage from "../pages/Login/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import BlogDetailsPage from "../pages/Blogs/BlogDetailsPage.jsx";
import FeaturesDetails from "../pages/FeaturesDetails.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/fashion", element: <FashionPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/blogs/:blogId", element: <BlogDetailsPage /> },
      { path: "/features/:featuresId", element: <FeaturesDetails /> },
      { path: "/products/:productId", element: <ProductDetailsPage /> },
      { path: "/suede", element: <SuedePage /> },
      { path: "/leather", element: <LeathersPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forget-password", element: <ForgotPasswordPage /> },
      { path: "/contact-us", element: <ContactPage /> },
    ],
  },
]);

export default router;
