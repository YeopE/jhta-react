const promise = new Promise((resolve,reject)=>{
  let n = 10;
  if(typeof n==="number"){
    resolve(n+10);
  }else{
    reject("연산할 수 없는 값입니다.");
  }
});
promise.then((resp)=>{
  console.log("연산이 성공적으로 수행되었어요 ==>" + resp);
  const msg = "연산결과:" + resp;
  return msg; //promise 객체를 리턴한다.
}).then((r)=>{
  console.log(r);
}).catch(e=>{
  console.log(e)
});