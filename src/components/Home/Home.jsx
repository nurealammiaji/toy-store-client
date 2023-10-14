import { Link } from "react-router-dom";
import { PiPlusBold } from "react-icons/pi";

const Home = () => {
    return (
        <div>
            <br /><br />
            <div>
                <div className="text-center">
                    <h3 className="text-2xl font-semibold">Our Popular Toys</h3>
                    <br />
                    <Link to="/add-toy"><button className="btn btn-primary">Add Toy <PiPlusBold className="text-lg" /></button></Link>
                </div>
                <br /><br />
                <div>
                    <p>Toys will loaded here</p>
                </div>
            </div>
        </div>
    );
};

export default Home;