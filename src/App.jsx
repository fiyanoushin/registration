import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Registration from "./Components/Registration"
import Login from "./Components/Login"

function App(){

  return(
    <>
    <Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/" element={<Registration></Registration>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>

    </Routes>
    </>
  )
}
export default App