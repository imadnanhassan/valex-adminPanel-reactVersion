import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <h2>Main</h2>,
    errorElement: <h4>Not</h4>,
    children: [{ path: "/", element: <p>Home</p> }],
  },
]);
export default route;
