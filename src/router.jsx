import { createBrowserRouter } from "react-router-dom";

import Home from './views/Home';
import AddCard from "./views/AddCard";
import EditCard from "./views/EditCard";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error text="This page does not exist." />
    },
    {
        path: '/addcard',
        element: <AddCard />
    },
    {
        path: '/editcard',
        element: <EditCard />
    }
]);

export default router;