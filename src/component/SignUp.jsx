import { useState } from "react"

function SignUp() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()
        alert("Oop!Something went wrong.")
    }
    return (  
        <div className="d-flex vh-100">
             <form className="row w-50 rounded  border  p-3 bg-light m-auto"onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                    <h4>SignUp</h4>
                   
                </div>
                
                <div className=" d-flex my-2">
                    <span className="my-auto me-2 d-flex"><i className="bi bi-person-lock me-1"></i>:</span>
                    <input value={userName}onChange={e=>setUserName(e.target.value)} type="text" className="form-control" placeholder="Enter userName"/>
                </div>

                <div className=" d-flex my-2">
                    <span className="my-auto me-2 d-flex"><i className="bi bi-person me-1"></i>:</span>
                    <input value={email}onChange={e=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email"/>
                </div>
            
                <div className=" d-flex my-2">
                    <span className="my-auto me-2 d-flex"><i className="bi bi-person-lock me-1"></i>:</span>
                    <input value={password}onChange={e=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Confirm Password"/>
                </div>
                <div className="d-flex justify-content-end my-2">
                    <button type="submit"disabled={userName&& password&&email?false:true} className="btn text-light bg-dark">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;