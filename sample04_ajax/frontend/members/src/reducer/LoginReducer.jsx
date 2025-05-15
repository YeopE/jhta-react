import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { memberLogin } from "../api/members";

const init={
  userid:''
}
//Redux에서 비동기 처리를 위해서는 createAsyncThunk를 사용해야 한다.
//createAsyncThunk는 Promise의 3가지 상태와 같이 pending, fulfilled, rejected의 상태를 갖는다.
export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=>{
  return memberLogin(param);
});

export const LoginReducer = createSlice({
  name:'loginInfo',
  initialState:JSON.parse(sessionStorage.getItem("member")) || init,
  reducers:{
    logout:(state,action)=>{
      console.log("logout");
      sessionStorage.clear();
      return {...init};
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(loginPostAsync.pending,(state,action)=>{ //요청처리중
      console.log("pending");
      
    })
    .addCase(loginPostAsync.fulfilled,(state,action)=>{ //응답이 성공적으로 된 경우
      console.log("fullfilled",action.payload);
      const payload = action.payload;
      sessionStorage.setItem("member",JSON.stringify(payload));
      return payload;
    })
    .addCase(loginPostAsync.rejected,(state,action)=>{ //오류가 발생된 경우
      console.log("rejected",action.payload);
      
    })
  }
});
export default LoginReducer.reducer;
export const {logout} = LoginReducer.actions;