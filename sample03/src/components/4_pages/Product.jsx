import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Product=()=>{
  // 쿼리스트링으로 파라미터가 넘어온경우는 useSearchParams를 사용한다.
  // <li><Link to="/product?pname=냉장고">상품페이지</Link></li>
  const [params,setParams] = useSearchParams();
  const [pname, setPname] = useState();
  useEffect(()=>{
    const name = params.get("pname");
    console.log(name);
    setPname(name);
  },[])
  return(
    <>
      <div>
        <h1>Product</h1>
        <div>검색할 제품명 : {pname}</div>
      </div>
    </>
  )
}
export default Product;