import { useNavigate } from "react-router-dom"

function Login(){

    const nav=useNavigate()

    const handlingButton=()=>{
        nav("/home")
    }

    return(
        <>
        <h1>Login</h1>
        <label>username</label><br></br>
        <input type="text" placeholder="Enter username"></input><br></br>
        <label>password</label><br></br>
        <input type="password" placeholder="password"></input><br></br>
        <button onClick={handlingButton}>Login</button>
        </>
    )
}
export default Login