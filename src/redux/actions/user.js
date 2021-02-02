import constants from "./../../config/constants";

export const listUsers = () => {
    return {
        type: constants.user.list
    }
}

export const viewUser = () => {
    return {
        type: constants.user.view
    }
}


export const addUser = (requestData) => {
    console.log(requestData);
    console.log("In user action!");
    return {
        type: constants.user.add,
        payload: requestData
    }
}

export const editUser = () => {
    return {
        type: constants.user.edit
    }
}

export const deleteUser = () => {
    return {
        type: constants.user.delete
    }
}