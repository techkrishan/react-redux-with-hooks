
export const addUser = (state, requestData) => {
    return {loading: false, error: false, message: '', details: {}, users: [...state.users, requestData]};
}

export const listUser = (state) => {
    return state;
}

export const viewUser = (state, id) => {
    let details = {
        id: id,
        name: state.users[id].name ?? '',
        phone: state.users[id].phone ?? '',
    }
    return {loading: false, error: false, message: '', details: details, users: state.users};
}

export const editUser = (state, requestData) => {
    let newList = [];
    state.users.forEach((row, key) => {
        if(key != requestData.id) {
            newList.push(row);
        } else {
            newList.push({
                name: requestData.name ?? '',
                phone: requestData.phone ?? ''
            });
        }
    });
    return {loading: false, error: false, message: '', details: {}, users: newList};
}

export const deleteUser = (state, id) => {
    let newList = [];
    state.users.forEach((row, key) => {
        if(key != id) {
            newList.push(row);
        }
    });
    return {loading: false, error: false, message: '', details: {}, users: newList};
}