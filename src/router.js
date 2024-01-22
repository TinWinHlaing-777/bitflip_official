import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Membership from "./pages/Membership/Membership";
import Contact from "./pages/FooterSession/Contact";
import Privacy from "./pages/FooterSession/Privacy";
import Terms from "./pages/FooterSession/Terms";
import Conduct from "./pages/FooterSession/Conduct";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import BlogPromo from "./pages/Blogs/BlogPromo";
import ContactInfo from "./pages/Contact/ContactInfo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/services",
    Component: Services,
  },

  {
    path: "/blog-promo",
    Component: BlogPromo,
  },
  {
    path: "/contact",
    Component: ContactInfo,
  },
  {
    path: "/plus",
    Component: Membership,
  },
  {
    path: "/contact-details",
    Component: Contact,
  },
  {
    path: "/terms-of-use",
    Component: Terms,
  },
  {
    path: "/privacy-policy",
    Component: Privacy,
  },
  {
    path: "/user-conduct",
    Component: Conduct,
  },
]);

export default router;
