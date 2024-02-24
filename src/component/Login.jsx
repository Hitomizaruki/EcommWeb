import { useContext, useState } from "react";
import Context from "../state/Context";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
    const {setIsLoginShow,setToken}=useContext(Context)
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res= await axios.post('https://dummyjson.com/auth/login',{
                username: userName,
                password: password,
            })
            const token=await res.data.token
            if(token){
                setPassword('')
                setUserName('')
                setIsLoginShow(false)
                setToken(token)
                localStorage.setItem('EcommToken',token)
            }

        } catch (error) {
            alert("account is not found")
        }
    }
    return (<form className="row w-50 rounded z-3 border  p-3 position-fixed top-50 start-50 translate-middle bg-light"onSubmit={handleSubmit}>
   

        <div className="d-flex justify-content-between">
            <h4>Login</h4>
            <i className="bi bi-x fs-3"onClick={ () => setIsLoginShow(false)}></i>
        </div>
        <div className=" d-flex my-2">
            <span className="my-auto me-2 d-flex"><i className="bi bi-person me-1"></i>:</span>
            <input type="text" className="form-control"onChange={(e)=>{setUserName(e.target.value)}}value={userName} placeholder="Enter Email"/>
        </div>
        <div className=" d-flex my-2">
            <span className="my-auto me-2 d-flex"><i className="bi bi-person-lock me-1"></i>:</span>
            <input type="password" className="form-control"onChange={(e)=>{setPassword(e.target.value)}}value={password} placeholder="Enter Password"/>
        </div>
        <div className="d-flex justify-content-start my-2">
           <Link to={"/Register"} className="text-dark "style={{textDecoration:"none"}}>Create account</Link>
        </div>
        <div className="d-flex justify-content-end my-2">
            <button type="submit"disabled={userName&& password?false:true} className="btn text-light bg-dark">Submit</button>
        </div>
    </form>
);
}

export default Login;