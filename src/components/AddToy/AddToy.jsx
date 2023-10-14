import { PiArrowLeftBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AddToy = () => {

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const manufacturer = form.manufacturer.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const variant = form.variant.value;
        const photoURL = form.photoURL.value;
        const toy = {name, category, manufacturer, supplier, details, variant, photoURL};
        console.log(toy);
        fetch('https://toy-store-server-bd.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toy),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged === true) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy added successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Close'
              })
        })
    }

    return (
        <div>
            <br /><br />
            <Link to="/"><button className="btn btn-secondary"><PiArrowLeftBold className="text-lg" />Back to Home</button></Link>
            <br /><br /><br />
            <form onSubmit={handleAddToy} className="w-9/12 p-10 mx-auto bg-base-200">
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Type name here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Type category here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Manufacturer</span>
                        </label>
                        <input type="text" name="manufacturer" placeholder="Type manufacturer here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Type supplier here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Type details here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Variant</span>
                        </label>
                        <input type="text" name="variant" placeholder="Type variant here" className="w-full max-w-xs input input-bordered" />
                    </div>
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photoURL" placeholder="Type photo url here" className="input input-bordered" />
                </div>
                <button type="submit" className="w-full mt-10 btn btn-primary">Add Toy</button>
            </form>
        </div>
    );
};

export default AddToy;