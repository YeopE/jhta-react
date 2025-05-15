import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './slices/loginSlice' //중괄호가 없으면 default로 지정된 export객체가 나오므로 {} 를 넣지 안도록 주의한다.

export default configureStore({
  reducer:{
    loginSlice:loginSlice,
  }
});