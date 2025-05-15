// ajax를 사용해서 member.json에서 데이터 가져와서 출력해 보세요.
// XMLHttpRequest객체 사용

const result ="";

// const xhr = new XMLHttpRequest();
// xhr.onload=function(){
//   console.log(xhr.responseText);
//   result=xhr.responseText;
// }
// xhr.open('get','member.json');
// xhr.send();

// console.log("result==>", result);


function getData() {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // xhr 객체를 생성
    
    xhr.onload = function() { // 응답을 다 받았을 때
      if (xhr.status === 200) {
        const result = xhr.responseText;
        resolve(result);  // 성공
      } else {
        reject('데이터를 불러오지 못했습니다.');
      }
    };

    xhr.onerror = function() { // 요청 자체가 실패했을 때
      reject('요청 실패');
    };

    xhr.open('get', 'member.json'); // 요청 준비
    xhr.send(); // 요청 보내기
  });

  return promise;
}

async function dataResult() {
  try {
    const result = await getData();
    console.log("result==>", result);
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

dataResult();

const promise = new Promise((resolve,reject)=>{
  const xhr = new XMLHttpRequest();
  xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300) {
      const resp = xhr.responseText;
      const m = JSON.parse(resp);
      resolve(m);
    }else {
      reject("오류발생=> 오류상태:" + xhr.status);
    }
  }
  xhr.open('get','member.json');
  xhr.send();
});

promise.then((resp)=>{
  const {username,email}=resp;
  console.log(username,email);
}).catch((e)=>{
  console.log(e);
});