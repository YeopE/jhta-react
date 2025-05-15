import { useContext} from "react";
import {UserContext} from "../../App"

const SampleContext=()=>{
  const userinfo=useContext(UserContext);
  return(
    <div>
      <h1>sample context</h1>
      <div>
        <ul>
          <li>이름:{userinfo.name}</li>
          <li>이메일:{userinfo.email}</li>
        </ul>
      </div>
    </div>
  )
}
export default SampleContext;