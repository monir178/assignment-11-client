import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Register from "../../pages/Register/Register";
import AllServices from "../../pages/AllServices/AllServices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
        ]
    }
])