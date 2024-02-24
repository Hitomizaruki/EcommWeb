import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../state/useFetch";

function Products() {
    const {data,isError,isLoading}=useFetch('https://dummyjson.com/products')
    return <>
        {isLoading&&<div className="vh-100  d-flex"><div className="m-auto"><div className="loader"></div></div></div>}
        {isError&&<div className="vh-100  d-flex">
            <div className="w-50 h-50 m-auto">
                <img src='https://th.bing.com/th/id/OIP.zJHS6ScYN9hFCNRBn71YwgHaHa?rs=1&pid=ImgDetMain'  className="object-fit-contain w-100 h-100" />
            </div>
        </div>}
         <div style={{paddingTop:"70px"}}>
        <h1 className="py-2 text-center">Products</h1>
        <div className="grid-card-container my-3">
            {data
                &&<>
                {data.products.map((item)=>{
                    return <Link to={`/Products/${item.id}`} className="grid-card-items d-flex flex-column  text-dark position-relative border"style={{textDecoration:"none"}}>
                    <div className="w-100 "style={{height:"300px"}}><img src={item.thumbnail} alt="" className="object-fit-conver w-100 h-100" /></div>
                    <h2 className="p-2 overflow-hidden w-100"style={{whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{item.title}</h2>
                    <div className="d-flex justify-content-between p-2">
                        <span className="text-secondary my-auto">{item.category}</span>
                        <h3>$ {item.price}</h3>
                    </div>
                </Link>
                })}
                </>
            }
           
        </div>
    </div> 
    </>
}

export default Products;