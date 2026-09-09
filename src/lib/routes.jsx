import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Components/Layouts/AppLayout.jsx";
import Fashion from "../pages/Fashion.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ArtificialLather from "../pages/ArtificialLather.jsx";
import Blogs from "../pages/Blogs.jsx";
import Suede from "../pages/Suede.jsx";
import Leather from "../pages/Leather.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {path:"/fashion", element: <Fashion />},
            {path:"/artificial-lather", element: <ArtificialLather />},
            {path:"/blogs", element: <Blogs />},
            {path:"/suede", element: <Suede />},
            {path:"/leather", element: <Leather />}
        ]
    }
]);

export default router;