import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Register from "../../pages/Register/Register";

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
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
        ]
    }
])