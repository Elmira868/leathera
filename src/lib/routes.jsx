import { createBrowserRouter } from "react-router";
import AppLayout from "../components/layouts/AppLayout.jsx";
import FashionPage from "../pages/FashionPage.jsx";
import HomePage from "../pages/Home/HomePage.jsx";
import ArtificialLatherPage from "../pages/ArtificialLatherPage.jsx";
import BlogsPage from "../pages/BlogsPage.jsx";
import SuedePage from "../pages/SuedePage.jsx";
import LeathersPage from "../pages/LeathersPage.jsx";
import LoginPage from "../pages/Login/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/fashion", element: <FashionPage /> },
      { path: "/artificial-lather", element: <ArtificialLatherPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/suede", element: <SuedePage /> },
      { path: "/leather", element: <LeathersPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forget-password", element: <ForgotPasswordPage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact-us", element: <ContactPage /> },
    ],
  },
]);

export default router;
