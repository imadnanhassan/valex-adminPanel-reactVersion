import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout";
import HomePage from "../pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h4>Not</h4>,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/shop", element: <p>Shop</p> },
            { path: "/pos", element: <p>post</p> },
            
            
        ],
  },
]);
export default route;
