import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader: ()=> fetch('/news.json')
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/news/:id',
          element:<PrivateRoute><News/></PrivateRoute>,
          loader: ()=> fetch('/news.json')
        }
      ]
    },
  ]);


  export default router;