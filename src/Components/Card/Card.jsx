import React from 'react'
import './Card.css'

export const Card = (props)=>
{
    return <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h1 >{props.monster.name}</h1>
    </div>
}