// React Router
import { createBrowserRouter, } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import Police from "./pages/police";
import ResetPass from './pages/resetpass'

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Login /> 
    },

    { 
        path: "/home", 
        element: <Home /> 
    },

    { 
        path: "/police", 
        element: <Police /> 
    },

    { 
        path: "/reset", 
        element: <ResetPass /> 
    },
])

export default router