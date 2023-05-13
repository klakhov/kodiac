import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

const initialState = {
    posts: [],
}

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload;
        },
    }
});

export const { loadPosts } = post.actions;

export const loadPostsAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${config.backend}/posts`);

        if (response.data) {
            dispatch(loadPosts(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export default post.reducer;