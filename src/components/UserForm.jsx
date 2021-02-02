import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./../redux/actions/user";


const UserForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let requestData = {
            name: e.target.name.value ?? '',
            phone: e.target.phone.value ?? ''
        }
        dispatch(addUser(requestData));
    }

    return (
        <>
        <div className="col justify-content-md-center">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 mb-4 border-bottom">
                <h2>Add Employee</h2>
            </div>
            <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" id="name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="phone" id="phone" />
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-end mb-3">
                    <button type="submit" className="btn btn-primary">Add Employee</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default UserForm;