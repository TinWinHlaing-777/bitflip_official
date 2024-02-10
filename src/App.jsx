import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalStyle } from "./styles/Global.style";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
