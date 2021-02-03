import constants from "./../../config/constants";

export const listUsers = () => {
    return {
        type: constants.user.list
    }
}

export const viewUser = (id) => {
    return {
        type: constants.user.view,
        payload: id
    }
}


export const addUser = (requestData) => {
    return {
        type: constants.user.add,
        payload: requestData
    }
}

export const editUser = (requestData) => {
    return {
        type: constants.user.edit,
        payload: requestData
    }
}

export const deleteUser = (id) => {
    return {
        type: constants.user.delete,
        payload: id
    }
}