import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import AddToy from "../components/AddToy/AddToy";
import ToyDetails from '../components/ToyDetails/ToyDetails';
import EditToy from "../components/EditToy/EditToy";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-toy",
                element: <AddToy></AddToy>
            },
            {
                path: "/toys/view/:id",
                element: <ToyDetails></ToyDetails>,
                loader: ({params}) => fetch(`https://toy-store-server-bd.vercel.app/toys/${params.id}`)
            },
            {
                path: "/toys/edit/:id",
                element: <EditToy></EditToy>,
                loader: ({params}) => fetch(`https://toy-store-server-bd.vercel.app/toys/${params.id}`)
            },
        ]
    }
])

export default Routes;