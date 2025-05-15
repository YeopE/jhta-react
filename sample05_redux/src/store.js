import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducer/user';

export default configureStore({
  reducer:{
    userReducer:userReducer,
  }
})