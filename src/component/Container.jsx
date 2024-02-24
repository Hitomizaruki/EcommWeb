import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { useContext } from "react";
import Context from "../state/Context";
import Login from "./Login";
import Footer from "./Footer";
import Cart from "./Cart";
function Container() {
  const {isCartShow,isLogin}=useContext(Context)

    return <main className="container-fluid p-0 ">
        <Navbar/>
        <div className="container ">
          <Outlet/>
        </div>
       <Footer/>
        {isCartShow&&<Cart/>}
        {isLogin&&<Login/>}
    </main>
}
export default Container