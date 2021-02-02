import React from "react";
import { useSelector } from "react-redux";


const UserList = () => {
    const users = useSelector(state => state.users);

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
                            <th>Actions</th>
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
                                    <td></td>
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