import axios from "axios";
import jwtAxios from "../util/jwtUtil";

export const host='http://localhost:8080/api';

export const loginPost=async(param)=>{
  const params = new URLSearchParams();
  params.append("email",param.username);
  params.append("pw",param.password);
  const res = await axios.post(`${host}/member/login`,params);
  return res.data;
}
export const todoList=async()=>{
  const res =await jwtAxios.get(`${host}/todos/list`);
  return res.data;
}

export const todoList1=async()=>{
  const {accessToken} = JSON.parse(sessionStorage.getItem("member"));
  const res =await axios.get(`${host}/todos/list`,{
    headers:{'Authorization':`Bearer ${accessToken}`}
  });
  return res.data;
}