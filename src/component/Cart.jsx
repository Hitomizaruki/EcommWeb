import { useContext, useEffect, useState } from "react";
import Context from "../state/Context";
import Paypalbutton from "../state/paypalbutton";
function Cart() {
    const {setIsCartShow,cart,setCart,clientID}=useContext(Context)
    const [isSuccess,setIsSuccess]=useState(false)
    const totalCount=cart.length>0&&cart.map(e=>e.price*e.quantity).reduce((total,num)=>total+num)


    const handleCartClose = () => setIsCartShow(false);
    
    const handleChange=(param)=>{
        setCart(param)
        localStorage.setItem("cartStore",JSON.stringify(param))
    }
    // CartRemove
    const handleCartRemove = (t) => {
        const remove=cart.filter(e=>e!==t)
        handleChange(remove)
    };

    // Increate quantity
    const handleCartIncrea = (id) => {
        const increa=cart.map(e=>{
            if(e.id===id)e.quantity+=1
            return e
        })
        handleChange(increa)
    };
    // Decreate quantity
    const handleCartDecrea = (id) => {
        const decrea=cart.map(e=>{
            if(e.id===id)e.quantity-=1
            return e
        })
        handleChange(decrea)
    };
   
    return (<>
        {isSuccess
        && <div className="position-fixed top-50  z-3 start-50 translate-middle w-50 m-auto bg-warning rounded p-3 d-flex justify-content-between ">
            <h4>Purchase is successed</h4>
            <i className="bi bi-x fs-2"onClick={()=>{setIsSuccess(false)}}></i>
        </div>}
        <div className="row w-50 h-100 p-3 position-fixed top-0 end-0 bg-light z-2">
            <div className="col d-flex flex-column p-2">

                <div className="d-flex justify-content-between">
                    <h4>Shopping Cart</h4>
                    <i className="bi bi-x fs-3"onClick={handleCartClose}></i>
                </div>
                <span className="text-secondary">Total : $ <b>{totalCount}</b></span>
                <div className="Carts-items-container py-1">
                    {cart.length>0
                    &&<>
                    {cart.map(item=>{
                        return <div className="row py-3 ">
                        <div className="col d-flex">
                            <div className="cart-img me-2">
                                <img src={item.thumbnail} alt="" className="object-fit-contain w-100 h-100" />
                            </div>
                            <span className="my-auto"> {item.title}</span>
                        </div>
                        <div className="col-md-auto d-flex">

                            <div className="btn-group me-2 my-auto" role="group" aria-label="Second group">
                                <button disabled={item.quantity===1&&true} type="button"onClick={()=>{handleCartDecrea(item.id)}} className="btn border rounded">
                                    <i className="bi bi-dash"></i>
                                </button>

                                <button  type="button" className="btn border rounded mx-1">{item.quantity}</button>

                                <button  type="button"onClick={()=>{handleCartIncrea(item.id)}} className="btn border rounded">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>

                            <div className="btn-group my-auto" role="group" aria-label="Third group">
                                <button type="button"onClick={()=>{handleCartRemove(item)}} className="btn"><i className="bi bi-trash"></i></button>
                            </div>

                        </div>
                        <div className="col col-lg-2 d-flex">
                        <b className="my-auto">$ {item.price}</b>
                        </div>
                    </div>
                    })}
                    
                    </>}
                    
                
                </div>

            

                {cart.length>0
                &&<Paypalbutton state={{
                    totalCount,
                    clientID,
                    cart,
                    setIsSuccess
                }}/>}
                
            
            </div>
        </div>
    </>
   
    
     );
}

export default Cart;