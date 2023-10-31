import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalStyle } from "./styles/Global.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
