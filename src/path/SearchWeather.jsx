
import { useEffect, useState } from "react"
import useFetch from "../state/useFetch"
import { useParams } from "react-router-dom"
import { handleImg } from "../state/Functions"


function SearchWeather() {

    const apiKey=import.meta.env.VITE_API_KEY
    const {cityName}=useParams()
    const [visibility,setVisibility]=useState(0)
    const [icon,setIcon]=useState('')
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    const {data,isLoading,isError}=useFetch(api)
    useEffect(()=>{
       if(data!==undefined){ 
            setVisibility(Math.floor((data.visibility / 1000)))
            setIcon(()=>{
                return handleImg(data.weather[0].icon)
            })
           
        }
    },[data])

    return<div className="d-flex vh-100"style={{overflow:"hidden"}}>

    {isLoading&&<div className="vh-100 vw-100 d-grid">
        <div className=" m-auto">
            <div className="loader"></div>
        </div>
    </div>}

    {isError&&<div className="vh-100 vw-100 d-flex">
        <div className=" m-auto w-50 h-50">
            <img src="https://cdn2.iconfinder.com/data/icons/network-and-communicaion/100/Page_Not_Found-256.png" alt="" className="object-fit-contain w-100 h-100" />
        </div>
    </div>}

    {data!==undefined
    && <section className="text-light">
    <div className="row h-100">
        <div className="col-md-4 d-flex flex-column justify-content-center">
            <b className="my-2">Current Wealther</b>
            <span>10:00 PM</span>
            <h2 className="my-2 ">{data.sys.country}/{data.name}</h2>
            <h1>{Math.floor(data.main.temp)}°C</h1>
        </div>
        <div className="col-md-4  d-flex flex-column justify-content-center">
            <div className="w-80 h-80 ">
            <img src={`${icon}`} alt="" className="object-fit-contain h-100 w-100" />
            </div>
            <div className="d-flex justify-content-center">
                <h3 className="text-center">{data.weather[0].description.toUpperCase()}</h3>
            </div>
        </div>
        <div className="col-md-4  d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-around my-2">
                <div className="d-flex flex-column p-3">
                <span>Humidity</span>
                <b>{data.main.humidity}%</b>
                </div>
                <div className="d-flex flex-column p-3">
                <span>wind speed</span>
                <b>{data.wind.speed}m/s</b>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div className="d-flex flex-column p-3">
                <span>Feels like</span>
                <b>{Math.floor(data.main.feels_like)}°C</b>

                </div>
                <div className="d-flex flex-column p-3">
                <span>visibility</span>
                <b>{ visibility!==0?`${visibility}km`:`${data.visibility}m` }</b>
                </div>
            </div>
            
        </div>
    </div>
    
    </section>}
     
    </div>
}

export default SearchWeather;