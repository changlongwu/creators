import React from 'react'
import {useState} from 'react'
import './Card.css'
import {Link}  from 'react-router-dom'
import {supabase} from '../client.js'

const  Card  =(props)=>{
    return (
        <div className='Card'>
            <h2 className='name'>{props.name}</h2>
            <h3 className='url'>{props.url}</h3>
            <p className="description">{props.description}</p>

        </div>

    )



}
export default Card;
