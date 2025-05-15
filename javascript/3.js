let a = 10;

const callback=(resolve,reject)=>{
  setTimeout(()=>{
    a = 20;
    //resolve(a);
    reject('오류가 발생되었습니다...')
  },1000);
}

const promise = new Promise(callback);
promise.then((res)=>{ //resolve함수가 호출된 경우
  console.log(res);
  console.log("success");
});
promise.catch((e)=>{
  console.log("error...." + e);
});

// console.log(a);