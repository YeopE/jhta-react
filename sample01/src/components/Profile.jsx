const Profile=(props)=>{
  const {img,name,phone}=props;
  return(
    <div style={{backgroundColor:'pink', padding:'5px', margin:'5px'}}>
      <h1>프로필</h1>
        <div><img src={img}/></div>
        <div>이름:{name}</div>
        <div>전화번호:{phone}</div>
    </div>
  )
}
export default Profile;