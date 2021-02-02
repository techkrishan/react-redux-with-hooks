import React from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

const Users = () => {

    return (
        <>
        <div className="container-fluid">
            <div className="row align-items-start mt-5">
                <UserList />
                <UserForm />
            </div>
        </div>
        </>
    );
}

export default Users;