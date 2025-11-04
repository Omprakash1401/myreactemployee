import { useState } from "react"

function ToDo(){

    const [employee,setEmployee]=useState({name:'', age:'', salary:'', department :''});

    const [employeeArray,setEmployeeArray]=useState([]);

    const [editIndex,setEditIndex]=useState(null);

    const inputHandler = (e) => {
        const {name, value } = e.target;
        setEmployee((old)=>({...old,[name]:value}));   
    };

    const addEmployee=()=>{
        if (editIndex===null){

        setEmployeeArray((old)=>[...old,employee]);
        
        }else{
            const updatedArray=[...employeeArray];
            updatedArray[editIndex]=employee;
            setEmployeeArray(updatedArray);
            setEditIndex(null);
        }
        reset();

    }

    const reset =()=>{
        setEmployee({
            name:'', age:0, salary:0, department :'',
        })
    }

    const deleteEmployee =(index)=>{
        const updatedArray = employeeArray.filter((emp,i)=> i!=index);
        setEmployeeArray(updatedArray);
        alert("Deleted !");
    }

     const showEmployee=(index)=>{
         const emp=employeeArray.find((emp,i)=>i===index);
    setEmployee(emp);

    setEditIndex(index);
    
     }

    const highSalaryCount = employeeArray.filter(emp => emp.salary > 35000).length;


    return (
        <div>
            <h2> This is todo </h2>
            <form >

               <label > Name </label> &nbsp;
               <input type="text" name="name" value={employee.name} onChange={inputHandler} />
               <br />
               <br />

               <label > Age </label> &nbsp;
               <input type="number" name="age" value={employee.age} onChange={inputHandler} />
               <br />
               <br />

               <label > Salary </label> &nbsp;
               <input type="number" name="salary" value={employee.salary} onChange={inputHandler} />
               <br />
               <br />

               <label > Department </label> &nbsp;
               <select name="department" value={employee.department} onChange={inputHandler}>
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
               </select>
               
               <br />
               <br />

               <button onClick={addEmployee} type="button" > 
                 {
                    editIndex===null?"Add":"Update"
                } 
                </button>

            </form>

        <hr />

        

        <table border={1}>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employeeArray.map((emp,index)=>(
                        <tr>
                            <td>{index}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.department}</td>
                            <td><button onClick={()=> deleteEmployee(index)}> Delete</button> |
                            <button onClick={()=> showEmployee(index)}> Show</button></td> 
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <hr />
        <h2>More than 35000 : {highSalaryCount}</h2>
        </div>
    )

}

export default ToDo;