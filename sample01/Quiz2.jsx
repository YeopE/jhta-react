//2.버튼을 누를때마다 이미지가 번갈아 보여지도록 컴포넌트를 만들어 보세요(버튼하나)

import { useState } from "react";

const Quiz2 = ()=>{

    const [count,setCount] = useState(1);

    const changeImg=()=>{
        setCount(count === 10? 1:count+1);
    }

    return(
        <div>
            <button onClick={changeImg}>이미지변경</button>
            <div>
                <img src={`/${count}.png`}></img>
            </div>
        </div>
    )
}
export default Quiz2;