import React  from "react";
import {supabase} from '../client.js'
import {useState, useEffect} from 'react'
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import './ShowCreators.css'

const ShowCreators = (props)=>{
    const [creators, setCreators] = useState([]);

    useEffect(()=>{
        const fetchCreators = async()=>{
            const {data} = await supabase.from('creators').select().order('created_at',{ascending:true});
            setCreators(data);
        }

        fetchCreators();

    },[props])



    return (
        <div className="ShowCreators">
            <h1>Creators</h1> 
            <Link to={`/new`}>
            <button>add creator</button>
            </Link>
            

            { 
                creators && creators.length>0?
                creators.map((creator,index)=>(
                    <Link to={`/view/${creator.id}`} key={creator.id}>
                    <Card name={creator.name} url = {creator.url}  description = {creator.description}/>
                    </Link>
                )
                    
                )
                :<h2>{'No Creators Yet 😞'}</h2>
            }

        </div>
    )
}

export default ShowCreators;