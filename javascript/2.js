// let a = 10;
// setTimeout(()=>{
//   a=20;
// },1000);
// console.log(a); //10? 20? ==>10이 출력됨 setTimeout은 비동기방식으로 처리함


/*
  Promise
  - 비동기처리를 위한 하나의 패턴으로 콜백함수를 사용한다. 하지만 전통적인 콜백함수패턴을 콜백헬(Callback Hell)로
  가독성이 나쁘고 여러개의 비동기처리를 한번에 하는데 한계가 있다.ES6에서는 비동기 처리를 위한 또 
  다른 패턴으로 Promise를 제공한다.
  Promise 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다.

  Promise는 비동기 처리가 성공(fulfiled)하였는지 또는 실패(rejected)하였는지 등의 상태(state) 정보를 갖는다.'
  pending 비동기 처리가 아직 수행되지 않은 상태 resolve 또는 reject 함수가 아직 호출되지 않은 상태
  fulfilled 비동기 처리가 수행된 상태 (성공) resolve 함수가 호출된 상태
  rejected 비동기 처리가 수행된 상태 (실패) reject 함수가 호출된 상태
  settled 비동기 처리가 수행된 상태 (성공 또는 실패) resolve 또는 reject함수가 호출된 상태


  const callback=(resolve,reject)=>{
    ...
    if(data==true){
      resolve('success');
    }else{
      reject('fail');
    }
  }
  
  const promise = new Promise(callback);
  promise.then((res)=>{ //resolve가 호출된 경우 - 성공한 경우
    ...
  });
  promise.catch((e)=>{ //reject가 호출된 경우 - 실패한 경우
    ...
  });
*/


