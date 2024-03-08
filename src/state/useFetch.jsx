import { useEffect, useState } from "react";
import axios from 'axios'
function useFetch(api) {
    const [state,setState]=useState({
        isLoading:false,
        isError:false,
        data:undefined
    })
   
    const fetch=async(param)=>{
        setState({...state,isLoading:true})
       try {

        const res=await axios.get(param)
        const post=await res.data
        setState({...state,data:post,isLoading:false})
       } catch (error) {

        setState({...state,isError:true,isLoading:false})

       }
    }
    useEffect(()=>{
        fetch(api)
    },[api])
    return state
}
export default useFetch