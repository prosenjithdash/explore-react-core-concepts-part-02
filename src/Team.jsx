// 39-4 Understand The Concept Of UseState And React Hooks

import { useState } from "react"

export default function Team() {


    // CSS Object
    let teamStyle = {
        border: '10px solid orange',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }



    // used useState
    const [team, setTeam] = useState(11);

    // Player Add handler
    function handleAdd() {
        let newPlayer = team + 1;
        setTeam(newPlayer)
    }

    // Player Remove handler
    function handleRemove() {
        let newPlayer = team - 1;
        setTeam(newPlayer)
    }

    
    return (
        <div style={teamStyle}>
            <h2>Players: {team} </h2>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}