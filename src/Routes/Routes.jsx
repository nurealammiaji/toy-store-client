import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import AddToy from "../components/AddToy/AddToy";
import ToyDetails from '../components/ToyDetails/ToyDetails';

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
                path: "/toys/:id",
                element: <ToyDetails></ToyDetails>
            }
        ]
    }
])

export default Routes;