import { useState } from "react";
import "./App.css";
import MyName from "./components/MyName";
import FormHandling from "./components/FormHandling";
import ToDo from "./components/ToDo";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  // let [counter, setCounter] = useState(0);

  // function inc() {
  //   setCounter(++counter);
  //   console.log(counter);
  // }

  // function dec() {
  //   setCounter(--counter);
  //   console.log(counter);
  // }

  return (
    <div>

      <Menu/>

      {/* <h1>Counter Example</h1>
      <hr />
      <h2>{counter}</h2>
      <hr />
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button> */}

      {/* <MyName></MyName> */}

      <Routes>
        <Route path="/formhandling" element={<FormHandling />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
      </Routes>

      {/* <Routes>
        <Route path="/formhandling" element={<FormHandling />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes> */}


      

      

      
    </div>
  );
}

export default App;
