import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


// Main Components
function App() {

  // 39-2 Different Way To Handle Events In React

  // way 01
  function handleClick() {
    alert("Successful Click 01.")
  }

  // way 02
  const handleClick2 = () => {
    alert("Successful Click 02.")
  }

  // way 04
  const handleClickProps = (num) => {
    alert(num + 10);
  }
  return (
    <>
      
      <h1>React Core Concepts Part: 02</h1>

      {/* 39-3 A Simple Introduction To State Change In React */}
      <Counter></Counter>

      {/* 39-4 Understand The Concept Of UseState And React Hooks */}
      <Team></Team>

      {/* Normal JavaScript */}
      {/* <button onclick='handleClick()'>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 02</button>
      <button onClick={() => { alert("Successful Click 03.") }}>Click 03</button>

      {/* handleClickProps(7) ->>> ( if we white this type then call direct call function so it's not to work properly that why need to use array function (rap)) */}
      <button onClick={() => handleClickProps(7)}>Click 4 with props</button>

      


      {/* 39-5 (Advanced) Understand The Concept Of UseEffect */}
      <Users></Users>


      {/* 39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State */}
      <Friends></Friends>
      
    </>
  )
}

export default App
