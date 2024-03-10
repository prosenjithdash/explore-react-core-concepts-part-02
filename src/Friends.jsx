// 39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State

import { useEffect, useState } from "react"
import Friend from "./Friend";
import './Friends.css'

export default function Friends() {
    
    // useState for hold data
    const [friends, setFriends] = useState([]);

    // load data with useEffect callback function and dependency
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setFriends(data))
        
    },[])

    return (
        <div className="box">
            <h1>Friends Information:- </h1>
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
            
        </div>
    )
}