import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../state/Context";
import useFetch from "../state/useFetch";

function ProductInfo() {
    const {productID}=useParams()
    const {cart,setCart,setIsLoginShow}=useContext(Context)
    const {data,isError,isLoading}=useFetch(`https://dummyjson.com/products/${productID}`)
    let ratingArray=[1,2,3,4,5]
    const [image,setImage]=useState('')
    useEffect(()=>{
        console.log(data)
        data&&setImage(data.thumbnail)
    },[data])
    const handleAddCart=(e)=>{
        const token=localStorage.getItem("EcommToken")

        if(token!==null){
            if(cart.map(t=>t.id).includes(e.id)){
                alert("Add already")
            }else{
                setCart([...cart,{...e,quantity: 1}])
                localStorage.setItem("cartStore",JSON.stringify([...cart,{...e,quantity: 1}]))
            }

        }else{
            setIsLoginShow(true)
        }
    }
    return ( <>
        {isLoading&&<div className="vh-100  d-flex"><div className="m-auto"><div className="loader"></div></div></div>}
        {isError&&<div className="vh-100  d-flex">
            <div className="w-50 h-50 m-auto">
                <img src='https://th.bing.com/th/id/OIP.314H5BLAcocxP3Lo7X5HzAAAAA?w=400&h=300&rs=1&pid=ImgDetMain' alt="loading..." className="object-fit-contain w-100 h-100" />
            </div>
        </div>}
        {data
        &&<div className="row vh-100"style={{paddingTop:"70px"}}>
        <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="w-50 h-50 mx-auto">
                <img src={image?image:data.thumbnail} alt="loading..." className="object-fit-contain w-100 h-100" />
            </div>
            <b className="p-2">Images</b>
            <div className="div-scroller p-2"style={{flexWrap:"wrap"}}>
                {data.images.map(img=>{
                    return<div className={`productInfo-items p-2 rounded ${image===img &&'border border-info'}`}onClick={()=>{setImage(img)}}>
                        <img src={img} alt="" className="object-fit-contain w-100 h-100" />
                    </div>
                })}
               
            </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="m-auto d-flex flex-column">
            <h1>{data.title}</h1>
            <b className="my-1">{data.brand}</b>
            <p className="my-1">{data.description}</p>
            <span className="my-1">{data.category}</span>

            <h4 className="my-1"> $ {data.price}</h4>
            <span className="my-1">
                {ratingArray.map(rate=>{
                    return rate<=data.rating
                    ?<i className="bi bi-star-fill"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                    :<i className="bi bi-star"style={{marginRight:"10px",color:"gold"}}key={rate}></i>
                })}
            </span>
            <button className="btn btn-dark text-light my-1 p-2"onClick={()=>{handleAddCart(data)}}>Add Cart</button>
            
          </div>
        </div>
    </div>}
    </> );
}

export default ProductInfo;