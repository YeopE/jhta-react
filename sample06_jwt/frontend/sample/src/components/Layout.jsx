import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout=()=>{
  return(
    <>
      <div className="flex flex-col w-auto p-3">
        <div className="bg-blue-300 text-white p-5">
          <Header></Header>
        </div>
        <div className="bg-white p-5 flex justify-center">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}
export default Layout;