// React Router
import { createBrowserRouter, } from "react-router-dom";
import Login from './pages/login';
import Market from './pages/market';
import ResetPass from './pages/resetpass';
import Home from './pages/home';
import Portfolio from "./pages/portfolio";
import Sign from "./pages/sign";
import Accounts from "./pages/accounts";

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
        path: "/market", 
        element: <Market /> 
    },

    { 
        path: "/portfolio", 
        element: <Portfolio /> 
    },

    { 
        path: "/reset", 
        element: <ResetPass /> 
    },

    { 
        path: "/sign", 
        element: <Sign /> 
    },
    
    {
        path: "/accounts",
        element : <Accounts />
    },
])

export default router