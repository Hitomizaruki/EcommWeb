import { useEffect,useState } from "react"
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Container from './component/Container'
import Home from './component/Home'
import Products from './component/Products'
import Context from './state/Context'
import SignUp from "./component/SignUp"
import ErrorPage from "./component/ErrorPage"
import ProductInfo from "./component/ProductInfo"
import axios from "axios"

function App() {
  const localCart=localStorage.getItem("cartStore")
  const [token,setToken]= useState(localStorage.getItem("EcommToken"))
  const [isCartShow, setIsCartShow] = useState(false);
  const [isLogin, setIsLoginShow] = useState(false);
  const [cart,setCart] = useState([]);
  const [clientID,setClientID] = useState(undefined);
  const fetchData=async()=>{
    try {
     const res= await axios.get('https://dummyjson.com/auth/me',{
         headers:{
          'Authorization':token, 
         }
      })
      setClientID(res.data.id)
    }catch(error){
      console.log(error)
    }
  }
 useEffect(()=>{
  localCart!==null&&setCart(JSON.parse(localCart))
  fetchData()
 },[token])
  return<Context.Provider value={{isCartShow,isLogin,setIsCartShow,setIsLoginShow,cart,setCart,clientID,setToken,setClientID}}>
      <BrowserRouter>
        <Routes>
          
            <Route path='/'element={<Container/>}>
              <Route index element={<Home/>}></Route>
              <Route path='/Products' element={<Products/>}></Route>
              <Route path='/Products/:productID' element={<ProductInfo/>}></Route>
            </Route>

            <Route path='/Register' element={<SignUp/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>

        </Routes>
    </BrowserRouter>
  </Context.Provider>
 
   
}

export default App
