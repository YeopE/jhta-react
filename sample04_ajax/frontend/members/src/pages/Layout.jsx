import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout=()=>{
  return(
    <div className="flex flex-col w-auto p-3">
      <div className="bg-blue-300 text-white p-5">
        <Header/>
      </div>
      <div className="bg-white flex justify-center">
        <Outlet/>
      </div>
      <div className="bg-blue-300 text-white p-5">
        <Footer/>
      </div>
    </div>
  )
}
export default Layout;