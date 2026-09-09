import { createBrowserRouter } from "react-router";
import AppLayout from "../components/layouts/AppLayout.jsx";
import FashionPage from "../pages/FashionPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ArtificialLatherPage from "../pages/ArtificialLatherPage.jsx";
import BlogsPage from "../pages/BlogsPage.jsx";
import SuedePage from "../pages/SuedePage.jsx";
import LeathersPage from "../pages/LeathersPage.jsx";

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
    ],
  },
]);

export default router;
