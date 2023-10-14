import { Link } from "react-router-dom";
import { PiArrowLeftBold } from "react-icons/pi";

const ToyDetails = () => {
    return (
        <div>
            <br /><br />
            <Link to="/"><button className="btn btn-secondary"><PiArrowLeftBold className="text-lg" />Back to Home</button></Link>
            <br /><br /><br />
            <div className="w-9/12 p-10 mx-auto bg-base-200">

            </div>
        </div>
    );
};

export default ToyDetails;