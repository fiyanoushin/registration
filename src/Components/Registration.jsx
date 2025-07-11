
import { useNavigate } from "react-router-dom"

function Registration(){

    const navigate=useNavigate()

    const handleButton=()=>{
        navigate("/login")
    }

    return(
        <>
        <h1>YourEvent</h1>
        <h2>Online Registration</h2>
       <label>First Name</label>  <br></br><br></br> 
       <input type="text" placeholder="first name"></input><br></br><br></br>
        <label>Last Name</label> <br></br><br></br>
       <input type="text" placeholder="last name"></input> <br></br><br></br>
        <label>Email Address</label><br></br><br></br>
       <input type="email" placeholder="email address"></input><br></br><br></br>
        <label>Physical Address</label> <br></br><br></br>
       <input type="text" placeholder="physical address"></input> <br></br><br></br>
        <label>Date of Birth</label> <br></br><br></br>
       <input type="number" placeholder="month"></input> 
       <input type="number" placeholder="day"></input>
       <input type="number" placeholder="year"></input> <br></br><br></br>
       <button onClick={handleButton}>Submit</button>
        </>
    )
}

export default Registration