import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../state/Context";

function Navbar() {
    const {setIsCartShow,setIsLoginShow,cart,clientID,setClientID}=useContext(Context)
    const handleCartShow = () => setIsCartShow(true);
    const cartCount=cart.length>0&&cart.map(e=>e.quantity).reduce((total,num)=>total+num)
    
    return ( <><div className="container-fluid position-fixed top-0 py-3  z-1 border-bottom bg-light">
        <div className="container d-flex ">
            <ul className="nav ">
                <li className="nav-items me-3 d-flex">
                    <h3 className="my-auto">
                        <Link to="/"className="text-dark"style={{textDecoration:"none"}}>Brand</Link>
                    </h3>
                </li>
                 

                <li className="nav-items mx-3">
                    <Link to="/Products" className="nav-link text-secondary ">
                        <i className="bi bi-shop-window"></i>
                        <span className="mx-2 nav-span">Products</span>
                    </Link>
                </li>
                <li className="nav-items mx-3">
                    <button onClick={handleCartShow} className="nav-link text-secondary position-relative btn">
                        <i className="bi bi-cart4"></i>
                        <span className="mx-2 nav-span">Cart</span>
                        {cart.length>0
                        &&<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">+{cartCount} <span className="visually-hidden">unread messages</span></span>} 
                    </button>
                </li>
                <li className="nav-items mx-3">
                    {clientID===undefined
                    ?<button onClick={()=>{setIsLoginShow(true)}} className="nav-link text-secondary btn">
                        <i className="bi bi-person-plus"></i>
                        <span className="mx-2 nav-span">Login</span>
                    </button>
                    :<button onClick={()=>{
                        localStorage.removeItem("EcommToken")
                        setClientID(undefined)
                        alert('log out')
                    }} className="nav-link text-secondary btn">
                        <i className="bi bi-person-dash"></i>
                        <span className="mx-2 nav-span">Log Out</span>
                    </button>
                    }
                </li>
            </ul>
        </div>
    </div></> );
}

export default Navbar;