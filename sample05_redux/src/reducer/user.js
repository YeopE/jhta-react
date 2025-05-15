import { createSlice } from "@reduxjs/toolkit"

const init={
  name:'홍길동',
  age:10,
  email:'hong@test.com'
}

const userSlice=createSlice({
  name:'loginInfo',
  initialState:{user:init}, //initialState 초기화 값
  reducers:{
    login:(state,action)=>{ //dispatch를 호출할때
      console.log("action.payload", action.payload);
      state.user=action.payload; // action.payload에 담긴 것을 state.user에 담아준다.
    }
  }
})
export default userSlice.reducer;
export const {login} = userSlice.actions;