import { PiArrowLeftBold } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const EditToy = () => {

    const loadedToy = useLoaderData();

    const { _id, name, category, manufacturer, supplier, details, variant, photoURL } = loadedToy;
    console.log(loadedToy);

    const handleEditToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const name = form.name.value;
        const category = form.category.value;
        const manufacturer = form.manufacturer.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const variant = form.variant.value;
        const photoURL = form.photoURL.value;
        const toy = { id, name, category, manufacturer, supplier, details, variant, photoURL };
        console.log(toy);
        fetch(`https://toy-store-server-bd.vercel.app/toys/${id}`, {
            method: 'PUT',
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
                        text: 'Toy updated successfully',
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
            <form onSubmit={handleEditToy} className="w-9/12 p-10 mx-auto bg-base-200">
            <div className="w-full mb-5 form-control">
                    <label className="label">
                        <span className="label-text">Product ID</span>
                    </label>
                    <input type="text" name="id" defaultValue={_id} disabled className="input input-bordered" />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Manufacturer</span>
                        </label>
                        <input type="text" name="manufacturer" defaultValue={manufacturer} className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Variant</span>
                        </label>
                        <input type="text" name="variant" defaultValue={variant} className="w-full max-w-xs input input-bordered" />
                    </div>
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photoURL" defaultValue={photoURL} className="input input-bordered" />
                </div>
                <button type="submit" className="w-full mt-10 btn btn-primary">Update Toy</button>
            </form>
        </div>
    );
};

export default EditToy;