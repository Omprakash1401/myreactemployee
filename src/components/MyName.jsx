import { useState } from "react"

function MyName(){
    const [firstName,setFirstName]=useState("Sham");
    const inputHandler=(e)=>{
    const {value}=e.target;
    setFirstName(value);
    };
    return(
        <div>
            <label> Enter Your Name </label>
            <br />
            <input type="text" name="firstName" value={firstName} onChange={inputHandler}></input>

            <h1>My name is :{firstName}</h1>

        </div>

    );
}
export default MyName;