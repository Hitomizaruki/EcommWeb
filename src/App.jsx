import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Context } from './components/Context'
import Container from './path/Container'

function App() {
  return <Context.Provider>
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<Container/>}></Route>
      </Routes>
    </BrowserRouter>
  </Context.Provider>
  
  
}

export default App
