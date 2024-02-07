import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contacto from "../components/Contacto";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
        path: "/contacto",
        element: <Contacto/>,
    },
  ]);

export default router;