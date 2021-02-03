import { addUser, editUser, listUser, viewUser, deleteUser } from "./../../services/user";
import constants from "./../../config/constants";

let initialState = {
    loading: false,
    error: false,
    message: '',
    users: [{
        name: "Krishan Mohan",
        phone: "9630214587"
    },
    {
        name: "Vishal Raj",
        phone: "9630214588"
    },
    {
        name: "Raj Kumar",
        phone: "9630214586"
    },
    {
        name: "Mikku Raj",
        phone: "9630214589"
    },
    {
        name: "Rohit Kumar",
        phone: "9630214581"
    }],
    details: {}
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.user.add:
            return addUser(state, action.payload);
        case constants.user.edit:
            return editUser(state, action.payload);
        case constants.user.delete:
            return deleteUser(state, action.payload);
        case constants.user.view:
            return viewUser(state, action.payload);
        case constants.user.list:
            return listUser(state);
        default:
            return state;
    }
};

export default userReducer;