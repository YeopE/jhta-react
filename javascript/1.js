// 스프레드 연산자(spread) - 배열이나 객체를 펼쳐서 개별 요소로 분리하는 문법
let a=[1,2,3];
let b=[4,...a,5,6]; //a배열을 삽입함 - 흩부려진 a배열이 삽입된다.
console.log(b);

let obj1={
  n1:10,
  n2:20
};
let obj2={
  ...obj1, //흩뿌려진(펼쳐진) obj1객체가 삽입된다.
  n3:30,
  n4:40
}
console.log(obj2);

function func1(...arg){ //넘어온 인자를 하나의 배열로 모으는것(스프레드 연산자x)
  console.log(arg);
}
func1(10,20,30);
func1(100,200);

const member={
  name:"홍길동",
  age:10,
  phone:"010-1234-1234",
  fun1:()=>{
    console.log("test...");
  }
}

//기존 변수 저장
const aa = member.name;
const bb = member.age;

const {name,age,fun1}=member;//member 객체의 name과 age를 변수에 저장
console.log(name,age);
fun1();

const arr = [1,2,3,4];
const [a1,a2] = arr; //arr배열의 요소를 처음부터 얻어와 변수에 저장
console.log(a1,a2);


