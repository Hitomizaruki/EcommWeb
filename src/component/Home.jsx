import { useEffect,useRef,useState } from "react"
import { horizotalScrollWheel, intersectionObserver } from "../state/functions"
import {Link}from 'react-router-dom'
import useFetch from "../state/useFetch"
function Home() {
    const scrollerRef=useRef()
    const {data}=useFetch('https://dummyjson.com/products?limit=5')
    useEffect(()=>{
        intersectionObserver("section")
        horizotalScrollWheel(scrollerRef.current)
    },[])
 return<>
    <section className="vh-100 my-3 py-3">
        <div className="row h-100 w-100">
            <div className="col-md-4  d-flex flex-column justify-content-end">
               <div className="d-flex flex-column p-2">
                <h3>Special Offers and Discounts</h3>
                <p className="text-secondary my-2">
                Stay tuned for exclusive deals, seasonal sales, and limited-time offers.
                We want you to enjoy great savings while shopping with us.
                Don’t miss out on discounts that make your shopping experience even better!
                </p>
               </div>
            </div>
            <div className="col-md-4 d-flex">
                <div className="div-rectangle m-auto"></div>
            </div>
            <div className="col-md-4 p-2 d-flex justify-content-end">
            <div className="d-flex flex-column pt-5">
                <h3>Customer Support</h3>
                <p className="text-secondary my-2">
                Got questions? Our customer support team is here to assist you.
                Whether you need help with product inquiries, returns, or any other concerns, feel free to reach out.
                We value your satisfaction and strive to provide excellent service.
                </p>
               </div>
            </div>
        </div>
    </section>

    <section className="vh-100 position-relative my-3 py-3">

       <div className="row w-100  "style={{height:"70%"}}>
        <div className="col d-flex">
            <div className="bg-dark mx-auto  h-100"style={{width:"80%"}}>
                <img src="https://th.bing.com/th/id/R.6505a760d3bdc239a881cb95d396eae9?rik=5ONGzhxCQ711Wg&riu=http%3a%2f%2fmedia.istockphoto.com%2fphotos%2fecommerce-online-shopping-concept-picture-id475750324%3fk%3d6%26m%3d475750324%26s%3d612x612%26w%3d0%26h%3d9eeeJ9pWrFsG66Rn7R8Si6OIA9j7ZCZUCgIh_Aumb6I%3d&ehk=ELWlB4ulgEtHPIYdm8DcXAFHOxwjpO1MvzJO5tM%2fLYg%3d&risl=&pid=ImgRaw&r=0" alt="" className="object-fit-cover w-100 h-100" />
            </div>
        </div>
        <div className="col ">
            <h1 className="my-2">Brand Services for our Online Store</h1>
        </div>
       </div>

       <div className="row position-absolute bottom-0 end-0 "style={{height:"70%",width:"80%"}}>
        <div className="col  h-100 ">
            <img src="https://th.bing.com/th/id/R.bb5d3cab8f6c648d95131b178908b70d?rik=aOTA1xZZUbnhXw&pid=ImgRaw&r=0" alt="" className="object-fit-cover w-100 h-100" />
        </div>
        <div className="col d-flex">
            <p className="m-auto text-secondary">
            Welcome to our online store! We’re excited to offer a seamless shopping
            experience for our customers. Our e-commerce services ensure that you can browse,
            select, and purchase your favorite products with ease. Here’s what we provide.
            </p>
        </div>
       </div>


    </section>

    <section className="vh-100 my-3 py-3">
        <h1 className="text-center py-2">EXPENSIVE PRODUCTS</h1>
        <div className="div-scroller my-3"ref={scrollerRef}>
            {data
                &&<>
                {data.products.map((item)=>{
                    return  <Link to={`/Products/${item.id}`} className="scroller-item d-flex flex-column text-dark border"style={{textDecoration:"none"}}>
                    <div className="w-100 "style={{height:"300px"}}><img src={item.thumbnail} alt="" className="object-fit-conver w-100 h-100" /></div>
                    <h2 className="p-2 overflow-hidden w-100"style={{whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{item.title}</h2>
                    <div className="d-flex justify-content-between p-2">
                        <span className="text-secondary my-auto">{item.category}</span>
                        <h3>$ 453</h3>
                    </div>
                    </Link>
                })}
            </>}
         
        </div>
    </section>

    <section className="vh-100  my-3 py-3">
        <div className="row w-100  "style={{height:"70%"}}>
            <div className="col-md-6 d-flex">
                <div className="bg-dark mx-auto  h-100"style={{width:"80%"}}>
                    <img src="https://th.bing.com/th/id/R.92ab45770519362a40b5283b8cd861ee?rik=QLzoCM9O%2f3x3uw&pid=ImgRaw&r=0" alt="" className="object-fit-cover w-100 h-100" />
                </div>
            </div>
            <div className="col-md-6 ">
                <h1 className="my-2">Order Tracking and Notifications</h1>
                <p className=" text-secondary">
                Once you’ve placed an order, we keep you informed every step of the way.
                You’ll receive order confirmation emails, shipping updates, and delivery notifications.
                Easily track your package and know when it will arrive at your doorstep.
            </p>
            </div>
       </div>
    </section>

    <section className="vh-100  my-3 py-3">
        <div className="row w-100  "style={{height:"70%"}}>
            <h1 className="my-2">Product Listings and Descriptions</h1>
            <div className="col-md-6 ">
                <h2 className="my-2">Listings and Descriptions</h2>
                <p className=" text-secondary">
                    Our website showcases a wide range of high-quality products. Each product listing
                    includes detailed descriptions, specifications, and high-resolution images.
                    Whether you’re looking for fashion, electronics, home decor, or beauty products, we’ve got you covered.
                </p>
            </div>
            <div className="col-md-6 d-flex">
                <div className="bg-dark mx-auto  h-100"style={{width:"80%"}}>
                    <img src="https://th.bing.com/th/id/OIP.YaHdJaW4IcPzgIVJ8kvdzAAAAA?w=400&h=270&rs=1&pid=ImgDetMain" alt="" className="object-fit-cover w-100 h-100" />
                </div>
            </div>
           
       </div>
    </section>

  
 </>
}
export default Home