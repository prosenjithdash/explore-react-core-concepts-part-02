// 39-5 (Advanced) Understand The Concept Of UseEffect

import { useEffect, useState } from "react"

export default function Users() {

    // useState for hold data
    const [users, setUsers] = useState([])

    // useEffect for 
    useEffect(() => {

        // load data with fetch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUsers(data))


        
        
        // load data with async fetch (face some problem)
        // let loaddata = async () => {
        //     let res = await fetch('https://jsonplaceholder.typicode.com/users')
        //     let data = await res.json();
        //     console.log(data)
        // }




    },[])

    // Return Result
    return (
        <div>
            <h2>User: {users.length}</h2>
        </div>
    )
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with call back function and dependency array
 * 3. use fetch to load data
 * 4. display data on the component
 */