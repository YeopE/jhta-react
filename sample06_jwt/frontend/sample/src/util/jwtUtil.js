import axios from "axios";

const jwtAxios = axios.create();
const beforeReq=(config)=>{
  const member=JSON.parse(sessionStorage.getItem("member"));
  if(!member){
    return Promise.reject({
      response:{
        date:{
          error:'REQUIRED_LOGIN'
        }
      }
    })
  }
  const {accessToken}=member;
  config.headers.Authorization=`Bearer ${accessToken}`
  return config;
}
const requestFail=(err)=>{
  return Promise.reject(err);
}

// 리프레쉬 토큰으로 새로운 액세스토큰 발급받는 함수
const refreshJWT=async (accessToken,refreshToken)=>{
  const header={headers:{"Authorization":`Bearer ${accessToken}`}}
  const res=await axios.get(`http://localhost:8080/api/member/refresh?refreshToken=${refreshToken}`,header);
  return res.data;
}

// 서버에서의 응답결과가 액세스토큰이 만료되었는지 검사하고 엑세스토큰이 만료되었으면
// 새로운 액세스토큰을 발급받기 (스프링서버 /api/member/refresh에 요청)
const beforeRes=async(res)=>{
  const data=res.data; //서버에서 응답 온 결과값
  if(data && data.error=='ERROR_ACCESS_TOKEN'){ //액세스토큰이 유효하지 않은 경우
    //새로운 액세스토큰 받아오기
    const member = JSON.parse(sessionStorage.getItem("member"));
    // const {accessToken,refreshToken}=member;
    const result=await refreshJWT(member.accessToken,member.refreshToken);
    console.log("result",result);
    member.accessToken=result.accessToken;
    member.refreshToken=result.refreshToken;
    // 변경된 정보로 세션스토리지에 다시 저장
    sessionStorage.setItem("member",JSON.stringify(member));
    // 원래 요청했던 url얻어오기(새로운 엑세스토큰으로 다시 요청하기 위해)
    const originalRequest=res.config;
    originalRequest.headers.Authorization=`Bearer ${result.accessToken}`;
    // 새로운 액세스토큰을 가지고 다시 요청하기
    return await axios(originalRequest);
  }
  return res;
}

const responseFail=(err)=>{
  return Promise.reject(err);
}

// 서버에 요청하기 전에 beforeReq함수가 호출된다.
// 서버에 요청이 실패하면 requestFail함수가 호출된다.
jwtAxios.interceptors.request.use(beforeReq,requestFail);
jwtAxios.interceptors.response.use(beforeRes,responseFail)


export default jwtAxios;