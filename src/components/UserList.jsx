import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewUser, deleteUser } from "./../redux/actions/user";


const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    const handleEdit = (e) => {
        let employeeKey = e.target.getAttribute("data-key") ?? '';
        dispatch(viewUser(employeeKey));
    }

    const handleDelete = (e) => {
        let employeeKey = e.target.getAttribute("data-key") ?? '';
        dispatch(deleteUser(employeeKey))
    }

    return (
        <>
        <div className="col">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 mb-4 border-bottom">
                <h2>List Employees</h2>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((row, key) => {
                            return(
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.phone}</td>
                                    <td className="text-end">
                                        <button data-key={key} onClick={handleEdit} className="btn" type="button"><i className="bi bi-pencil text-primary"></i></button>
                                        <button data-key={key} onClick={handleDelete} className="btn" type="button"><i className="bi bi-trash text-danger"></i></button>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default UserList;