import { Link } from "react-router-dom";
import { PiEyeBold, PiPenBold, PiTrashBold } from "react-icons/pi";

const Toy = ({ toy }) => {

    const { _id, name, category, manufacturer, photoURL } = toy;

    return (
        <div className="flex items-center justify-between gap-3 p-5 bg-base-200">
            <div className="w-[150px]">
                <img src={photoURL} alt="" />
            </div>
            <div className="flex-grow">
                <h4 className="text-lg"><span className="font-medium">Name:</span> {name}</h4>
                <h4 className="my-5 text-lg"><span className="font-medium">Manufacturer:</span> {manufacturer}</h4>
                <h4 className="text-lg"><span className="font-medium">Category:</span> {category}</h4>
            </div>
            <div>
                <div className="join join-vertical">
                    <Link to={`/toys/view/${_id}`}><button className="w-full btn btn-info join-item"><PiEyeBold className="text-2xl" /> </button></Link>
                    <Link to={`/toys/edit/${_id}`}><button className="w-full btn btn-success join-item"><PiPenBold className="text-2xl" /></button></Link>
                    <button className="btn btn-error join-item"><PiTrashBold className="text-2xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default Toy;