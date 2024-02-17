import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Container from './path/Container'
import Home from './path/Home'
import SearchWeather from './path/SearchWeather'

function App() {

  return <BrowserRouter>
    <Routes>
        <Route path='/'element={<Container/>}>
          <Route index element={<Home/>}></Route>
          <Route path='city/:cityName' element={<SearchWeather/>}></Route>
        </Route>
    </Routes>
</BrowserRouter>
   
}

export default App
