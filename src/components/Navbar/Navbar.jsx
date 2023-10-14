import { Link } from "react-router-dom";
import icon from "../../assets/toyIcon.png";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <Link to="/" className="text-2xl normal-case btn btn-ghost font-bold"><img className="h-[50px]" src={icon} alt="" /> Toy Store</Link>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </nav>
    );
};

export default Navbar;