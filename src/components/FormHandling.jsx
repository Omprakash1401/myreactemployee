import { useState } from "react";

function FormHandling() {

    const [register, setRegister] = useState({ username: '', password: '',age:'' });

    const [users,setUsers]=useState([])

    const inputHandler = (e) => {
        const {name, value } = e.target;
        setRegister((old)=>({...old,[name]:value}));     
    };

    

    const registerUser=(e)=>{
        e.preventDefault();
        
        setUsers((old)=>[...old,register]);
    }

    const reset=()=>{
        setRegister({
            username: '', password: '',age:''
        });
    };

    return (
        <div>
            <form onSubmit={registerUser} >

                <label > userName </label> &nbsp;
                <input type="text" name="username" value={register.username} onChange={inputHandler} />
                <br />
                <br />

                <label > password </label>  &nbsp;
                <input type="password" name="password" value={register.password} onChange={inputHandler} />
                <br />
                <br />

                <label > age </label>  &nbsp;
                <input type="number" name="age" value={register.age} onChange={inputHandler} />
                <br />
                <br />

                <button type="submit" >registerUser</button>
            </form>
            <br />
        <table border={1}>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>(
                        <tr>
                            <td>{u.username}</td>
                            <td>{u.password}</td>
                            <td>{u.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}

export default FormHandling;