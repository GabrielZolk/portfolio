import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Infos from "../pages/Infos";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Infos />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
])