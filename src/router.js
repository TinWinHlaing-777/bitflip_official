import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Membership from "./pages/Membership/Membership";
import Contact from "./pages/FooterSession/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/plus",
    Component: Membership,
  },
  {
    path: "/contact-details",
    Component: Contact,
  },
]);

export default router;
