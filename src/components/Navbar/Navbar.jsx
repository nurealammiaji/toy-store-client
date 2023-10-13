import icon from "../../assets/toyIcon.png";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <a className="text-xl normal-case btn btn-ghost"><img className="h-[50px]" src={icon} alt="" /> Toy Store</a>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </nav>
    );
};

export default Navbar;