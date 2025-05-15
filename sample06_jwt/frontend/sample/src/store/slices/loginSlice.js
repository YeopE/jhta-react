import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../../api/memberApi";

const initialState={
  email:''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=>{
  return loginPost(param);
});

export const loginSlice=createSlice({
  name:"loginInfo",
  initialState:initialState,
  initialState:JSON.parse(sessionStorage.getItem("member")) || initialState,
  reducers:{
    logout:(state,action)=>{
      sessionStorage.clear();
      return {...initialState}
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(loginPostAsync.fulfilled,(state,action)=>{
      const payload = action.payload;
      sessionStorage.setItem("member",JSON.stringify(payload));
      // state=payload; //return 대신 바로 state에 담아줘도 된다.
      return payload;
    });
  }
});
export default loginSlice.reducer;
export const {login,logout} = loginSlice.actions;