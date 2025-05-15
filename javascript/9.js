// fetch('member.json') //fetch의 return type = promise
// .then(res=>{
//   console.log(res);
//   return res.json();
// }).then(data=>{
//   // console.log(data);
//   const {username,password,email}=data;
//   console.log(username,password,email);
// })

async function sample(){
  const resp =await fetch('member.json');
  const json =await resp.json();
  // console.log(json);

  const {username,password,email}=json;
  console.log(username,password,email);

}
sample();