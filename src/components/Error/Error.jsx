import { useRouteError } from "react-router-dom";
import errorImage from "../../assets/404.png";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="text-center">
            {
                (error) &&
                <img className="mx-auto" src={errorImage} alt="" />
            }
            <h3 className="text-2xl">{error.status}</h3>
            <br />
            <h3 className="text-2xl">{error.statusText}</h3>
            <br />
            <h5 className="text-xl">{error.data}</h5>
        </div>
    );
};

export default Error;