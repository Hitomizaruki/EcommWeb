import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypalbutton({state}) {
    
 const initialOptions = {
    clientId:import.meta.env.VITE_CLIENT_ID,
    currency: "USD",
    intent: "capture",
};

 // Paypal Button
 const createOrder=async(data,action)=>{
        
    return action.order.create({
        
        purchase_units:[
            {
                description:"Shopping",
                amount:{
                    value:state.totalCount,
                    currency_code:"USD"
                }
            }
        ],
        application_context:{
            shipping_preference:"NO_SHIPPING"
        }
    }).then(orderID=>{
        return orderID
    })
}
 const onApprove=(data,action)=>{
    return action.order.capture().then(async(details)=>{ 
        try {
            const res=await axios.post('https://dummyjson.com/carts/add',{
                userId:state.clientID,
               products:state.cart
             })
            state.setIsSuccess(true)
             
           }catch(error){
             console.log(error)
            alert(`Purchase is Error`)
             
           }
    })
}
 const onError=()=>{
    alert(`Purchase is failed`)
}
    return <>
    <PayPalScriptProvider  options={initialOptions}>
        <PayPalButtons 
            style={{
                color:'silver',
                height:40,
                tagline:false,
                shape:"pill",
                layout:"horizontal"
            }}
            createOrder={createOrder}

            onApprove={onApprove}
            onError={onError}
        />
    </PayPalScriptProvider>
    </>;
}

export default Paypalbutton;