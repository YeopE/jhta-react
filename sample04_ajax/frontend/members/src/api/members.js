import axios from "axios";

const host = 'http://localhost:8080/api';

// const param = {userid:'hello',password:'1234'}==> userid=hello$password=1234
export const memberLogin=async(param)=>{
  //queryString 형태로 파라미터 만들기 예) ?userid=hello&password=1234
  const params = new URLSearchParams();
  params.append("userid",param.userid);
  params.append("password",param.password);
  console.log("params",params);
  const resp =await axios.post(`${host}/login`,params);
  return resp.data;
}


export const memberJoin=async(member)=>{
  const data = await axios.post(`${host}/members`,member).then((res)=>{
                // console.log(res);
                return res.data;
               });
  return data;
}

export const memberList=async()=>{
  const data = await axios.get(`${host}/members`).then(res=>{
                // console.log(res);
                return res.data;
               });
  // console.log(data);

  return data;
}

//ajax로 삭제 함수 만들기
export const memberDelete=async(id)=>{
  const data = await axios.delete(`${host}/members/${id}`).then(res=>{
    // console.log(res);
    return res.data;
  })
  return data;
}

export const memberDetail =async(id)=>{
  const data = await axios.get(`${host}/members/${id}`).then(res=>{
    // console.log(res);
    return res.data;
  })
  return data;
}

export const memberUpdate=async(member)=>{
  const data = await axios.put(`${host}/members`,member).then(res=>{
    return res.data;
  })
  return data
}