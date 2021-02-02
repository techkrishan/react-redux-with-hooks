import { addUser } from "./../../services/user";
import constants from "./../../config/constants";

let initialState = [
    {
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
    },
]

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.user.add:
            return addUser(state, action.payload);
        case constants.user.edit:
            return state;
        case constants.user.delete:
            return state;
        case constants.user.view:
            return state;
        default:
            return state;
    }
};

export default userReducer;