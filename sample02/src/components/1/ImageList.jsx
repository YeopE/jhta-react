import MyImage from "./MyImage";

const arr=["/images/3.png","/images/4.png","/images/5.png"]

const ImageList=()=>{
  const MyImageBox={
    display:"flex",
    gap:5
  }

  return(
    <div>
      <h1>이미지리스트</h1>
      {/* 배열의 이미지를 보이는 MyImage컴포넌트를 만들어 보세요. */}
      <div style={MyImageBox}>
        {
          arr.map((a,index)=>{
            return <MyImage key={index} src={a} text={`강아지사진${index}`}></MyImage>
          })
        }
      </div>
    </div>
  )
}

export default ImageList;