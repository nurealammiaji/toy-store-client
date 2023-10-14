import { Link } from "react-router-dom";
import { PiPlusBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import Toy from '../Toy/Toy';

const Home = () => {

    const [toys, setToys] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    })

    return (
        <div>
            <br /><br />
            <div>
                <div className="text-center">
                    <h3 className="text-3xl font-medium divider w-6/12 mx-auto">Our Popular Toys</h3>
                    <br />
                    <Link to="/add-toy"><button className="btn btn-primary">Add Toy <PiPlusBold className="text-lg" /></button></Link>
                </div>
                <br /><br />
                <div>
                    <div className="grid gap-10 md:grid-cols-2">
                        {
                            (toys) ? toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>) : 'There is no toy available!!'
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;