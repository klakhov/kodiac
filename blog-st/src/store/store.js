// Copyright (C) 2022-2023 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import posts from './posts-reducer';
import users from './user-reducer';

const reducer = combineReducers({
    posts,
    users,
});

const store = configureStore({
  reducer,
});

export default store;