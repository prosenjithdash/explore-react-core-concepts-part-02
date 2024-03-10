// 39-3 A Simple Introduction To State Change In React

import { useState } from "react"


export default function Counter() {
    
    // // For underStand
    // function useState(num) {
    //     function updateCounter(updateNum) {
    //         num = updateCounter;
            
    //     }
    //     return [num, updateCounter];
        
    // }
    // const [counter, setCounter] = useState(100);
    // console.log(counter,setCounter)


    // const ab = useState(90);
    // console.log(ab)


    // Simply use that
    const [count, setCount] = useState(0);

    // Add button handler
    const hadleAdd = () =>{
        let newCount = count + 1;
        setCount(newCount);
    }

    // Delete button handler
    const hadleDelete = () => {
        let newCount = count - 1;
        setCount(newCount);
    }


    return (
        <div style={{border: '2px solid red'}}>
            <h2>Counter: {count}</h2>
            <button style={{ border: '5px solid blue' }} onClick={hadleAdd}>Add</button>
            <button style={{ border: '5px solid green'}} onClick={hadleDelete}>Delete</button>

            
        </div>
        
    )
}