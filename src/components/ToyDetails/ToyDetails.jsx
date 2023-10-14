import { Link, useLoaderData } from "react-router-dom";
import { PiArrowLeftBold } from "react-icons/pi";

const ToyDetails = () => {

    const toy = useLoaderData();

    const { name, category, manufacturer, supplier, details, variant, photoURL } = toy;
    console.log(toy);

    return (
        <div>
            <br /><br />
            <Link to="/"><button className="btn btn-secondary"><PiArrowLeftBold className="text-lg" />Back to Home</button></Link>
            <br /><br /><br />
            <div className="w-10/12 p-10 mx-auto bg-base-200">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="w-[350px] col-span-1">
                        <img src={photoURL} alt="" />
                    </div>
                    <div className="col-span-1 [&>*]:mb-1">
                        <h3 className="text-2xl"><span className="font-semibold">Name:</span> {name}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Category:</span> {category}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Variant:</span> {variant}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Manufacturer:</span> {manufacturer}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Supplier:</span> {supplier}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Details:</span> {details}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;