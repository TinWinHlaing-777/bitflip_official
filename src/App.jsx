import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalStyle } from "./styles/Global.style";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
