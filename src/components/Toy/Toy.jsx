import { Link } from "react-router-dom";


const Toy = ({ toy }) => {

    const { _id, name, category, manufacturer, supplier, details, variant, photoURL } = toy;

    return (
        <div className="flex items-center justify-between gap-3 p-5 bg-base-200">
            <div className="w-[150px]">
                <img src={photoURL} alt="" />
            </div>
            <div className="flex-grow">
                <h4 className="text-lg">Name: {name}</h4>
                <h4 className="my-5 text-lg">Manufacturer: {manufacturer}</h4>
                <h4 className="text-lg">Category: {category}</h4>
            </div>
            <div>
                <div className="join join-vertical">
                    <Link to={`/toys/${_id}`}><button className="w-full btn btn-secondary join-item">View</button></Link>
                    <button className="btn btn-secondary join-item">Edit</button>
                    <button className="btn btn-secondary join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Toy;