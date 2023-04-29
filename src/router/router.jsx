import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Home/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Login/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            , {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]

    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://break-news-server-prasanjitsarker3.vercel.app/categories/${params.id}`)
            }

        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: ([
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://break-news-server-prasanjitsarker3.vercel.app/news/${params.id}`)
            }
        ])
    }
])
export default router;