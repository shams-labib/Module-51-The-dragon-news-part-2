import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Home from "../Pages/Home";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Firebase/Login/Login";
import Register from "../Firebase/Register/Register";
import AuthLayout from "../layout/HomeLayout/AuthLayout";
import ReadMore from "../Pages/ReadMore";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loading from "../PrivateRoute/Loading";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<HomeLayout></HomeLayout>,
        children: [
           {
            path:'/',
            index:true,
            element:<Home></Home>
           },
           {
            path:'/category/:id',
            element:<CategoryNews></CategoryNews>,
            loader:()=> fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
           },
        ]
    },
     {
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                },
            ]
           },
           {
            path:'/news-details/:id',
            element:<PrivateRoute>
                <ReadMore></ReadMore>,
            </PrivateRoute>,
            loader: ()=> fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
           }
])