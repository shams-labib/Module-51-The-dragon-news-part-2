import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Home from "../Pages/Home";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<HomeLayout></HomeLayout>,
        children: [
           {
            path:'/home',
            element:<Home></Home>
           },
           {
            path:'/category/:id',
            element:<CategoryNews></CategoryNews>,
            loader:()=> fetch('/news.json')
           }
        ]
    }
])