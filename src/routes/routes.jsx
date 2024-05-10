import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Dashboard from "../page/dashboard/dashboard";
import Customers from "../page/dashboard/Customers/Customers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },{
        path: "/dashboard",
        element:<Dashboard/>,
        children:[
            {
                path: "customers",
                element: <Customers/>
            }
        ]
    }
])