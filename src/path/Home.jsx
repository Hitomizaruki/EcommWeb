import {useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
    const [history,setHistory]=useState(JSON.parse(localStorage.getItem("history")))
    const navigate=useNavigate()
    const handleSearch=(e)=>{
        if(e.key==="Enter"){
            navigate(`/city/${e.target.value}`)
        }
    }
    const handleAddCity = () => {
       const localhistory=JSON.parse(localStorage.getItem("history"))
       const city=prompt()
       if(city!==null){
            if(localhistory!==null) {
                if(localhistory.length<=5){
                    setHistory([...history,city])
                    localStorage.setItem("history",JSON.stringify([...localhistory,city]))
                }else{
                    alert("So sorry.Max of box items")
                }
            }else{
                setHistory([city])
                localStorage.setItem("history",JSON.stringify([city]))
            }
       }
    }
    const handleRemove=(e)=>{
        const localhistory=JSON.parse(localStorage.getItem("history"))
            const filterHistory=localhistory.filter(t=>t!==e)
            if(filterHistory.length>0){
                setHistory(filterHistory)
                localStorage.setItem("history",JSON.stringify(filterHistory))
            }else{
                setHistory(null)
                localStorage.setItem("history",JSON.stringify(null))
            }
    }
   return<>
    <div className="d-flex vh-100">
        <div className="my-auto d-flex flex-column align-items-center w-100">
            <h1 className="brand-Name  my-3">CENTRAL WEATHER</h1>
            <input type="text" className="search-form-control my-3"onKeyDown={handleSearch} placeholder="Find the name of city"/>
            <div className="search-box mx-auto my-2">
                {history!==null&&<>
                    {history.map((e,index)=>{
                    return <div key={index} className="searchBox-items">
                        <Link to={`/city/${e}`} className="search-box-card">
                            <span>{e[0].toUpperCase()}</span>
                        </Link>
                        <i className="bi bi-x fs-6 position-absolute bg-body rounded x-icon" onClick={()=>{handleRemove(e)}}></i>

                        <span className="my-2 d-block text-light fs-6">{e}</span>
                    </div> 
                    })}
                </>}
                

                <div className="searchBox-items">
                    <div className="search-box-card"onClick={handleAddCity}>
                        <i className="bi bi-plus fs-3"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
}
export default Home