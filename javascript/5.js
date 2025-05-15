function sum(n1,n2){
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof n1==="number" && typeof n2==="number"){
        const result = n1+n2;
        resolve(result);
      }else {
        reject("연산할 수 없는 값입니다.");
      }
    },2000);
  });
  return promise;
}
const ss = sum(10,20);
ss.then((res)=>{
  console.log("결과==>" + res);
}).catch(e=>{
  console.log(e);
})