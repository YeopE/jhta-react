import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { memberLogin } from "../api/todos";

const init={
  userid:''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=>{
  return memberLogin(param);
});

export const LoginReducer = createSlice({
  name:'loginInfo',
  initialState:JSON.parse(sessionStorage.getItem("member"))||init,
  reducers:{
    logout:(state,action)=>{
      console.log("logout");
      sessionStorage.clear();
      return {...init};
    }
  },

  extraReducers:(builder)=>{
    builder.addCase(loginPostAsync.pending,(state,action)=>{
      console.log("pending");
    })
    .addCase(loginPostAsync.fulfilled,(state,action)=>{
      console.log("fullfilled", action.payload);
      const payload = action.payload;
      sessionStorage.setItem("member",JSON.stringify(payload));
      return payload;
    })
    .addCase(loginPostAsync.rejected,(state,action)=>{
      console.log("rejected", action.payload);
    })
  }
});
export default LoginReducer.reducer;
export const {logout} = LoginReducer.actions;