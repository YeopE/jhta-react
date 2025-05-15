//가로 세로 길이를 파라미터로 전달받아 사각형 넓이 구하는
//함수 만들고 사용해보세요. -> promise 사용해 보기

// async function area(r,h) {
//   return r * h;
// }

// async function areaResult() {
//   const result = await area(5,10);
//   console.log(result);
// }
// areaResult();

function mul(r,h){
  const promise = new Promise((resolve,reject)=>{
    if(r>0 && h >0){
      const result = r * h;
      resolve(result);
    }else {
      reject("가로 세로 길이가 0보다 커야 합니다.");
    }
  });
  return promise;
}

const area = mul(5,20);
area.then((res)=>{
  console.log("사각형넓이==>" + res);
}).catch(e=>{
  console.log(e);
})

function boxArea(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(a>0 && b>0){
        resolve({ //객체가 결과값이 됨
          label:"사각형넓이",
          area:a*b
        });
      }else{
        reject("길이입력오류");
      }
    },2000);
  })
}
async function printArea() {
  let {label,area} = await boxArea(10,20); //then을 쓰지 않고 boxArea가 완료되기를 기다림
  console.log(label,area);
}
printArea();