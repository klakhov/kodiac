import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import config from "../config";

const initialState = {
    users: [],
    loggedIn: false,
    loggedUser: null,
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUsers: (state, action) => {
            state.users = action.payload;
        },
        login: (state, action) => {
            state.loggedIn = true;
            state.loggedUser = action.payload;
        },
    }
});

export const { loadUsers, login } = user.actions;

export const loadUsersAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${config.backend}/users`);

        if (response.data) {
            dispatch(loadUsers(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export const loginAsync = (name, password) => async (dispatch) => {
    try {
        const response = await axios.get(`${config.backend}/users`, {
            params: {
                username: name,
                password,
            }
        });
        if (response.data && response.data.length === 1) {
            dispatch(login(response.data[0]));
        } else {
            throw 'User not found';
        }
    } catch (error) {
        console.log(error);
    }
}

export default user.reducer;