import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import SearchPage from "@/features/Search/pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
