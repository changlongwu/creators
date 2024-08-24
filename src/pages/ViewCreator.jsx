import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import {supabase} from '../client.js';
import { Link } from "react-router-dom";
import Card from '../components/Card.jsx'
import './ShowCreators.css'

const ViewCreator = ()=>{
    const {id} = useParams();
    const [creator, setCreator]  = useState(null);

    useEffect(()=>{
        const fetchCreator = async()=>{
            const {data, error} = await supabase.from('creators')
                .select()
                .eq('id',id)
                .single();
            if (error){
                console.error('Error fetching creator:', error.message);
            }else{
                setCreator(data);
            }
        };

        fetchCreator();


    },[id]);

    const deleteCreator = async(event)=>{
        event.preventDefault();

        await supabase.from('creators').delete().eq('id',id);
        window.location = '/';
    }

    if (!creator) {
        return <h2>Loading...</h2>;  // Display a loading message if the creator is not yet fetched
      }

    return (
        <div className="viewCreator">

            <Card name={creator.name} url = {creator.url}  description = {creator.description}/>
            
            {/* <h1>{creator.name}</h1>
            <a href={creator.url} target="_blank">
                {creator.url}
            </a>
            <p>{creator.description}</p> */}

            <Link to={`/edit/${creator.id}`} key={creator.id}>
            <button>Edit</button>
            <button className="deleteButoon" onClick={deleteCreator}>Delete</button>
            </Link>

        </div>
    )
}

export default ViewCreator;