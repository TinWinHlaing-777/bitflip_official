import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Membership from "./pages/Membership/Membership";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/plus",
    Component: Membership,
  },
]);

export default router;
