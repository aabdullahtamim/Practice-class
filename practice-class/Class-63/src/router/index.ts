
import FrontLayout from "@/components/layout/FrontLayout";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children:[
            {
                index:true,
                Component:HomePage,
            }
        ]
    }
])

