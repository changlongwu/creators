import React , { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {supabase} from '../client.js'
import './AddCreator.css'
const EditCreator = ()=>{
    const {id}= useParams();
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchCreator = async ()=>{
            const {data,error} = await supabase.from('creators')
            .select()
            .eq('id',id)
            .single();

            if (error) {
                console.error('Error fetching creator:', error.message);
                }
            else {
                console.log(data)
                setCreator(data);  // Set the fetched creator data to the form
            }
        };

        fetchCreator();


    }, [id]);

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setCreator((prevCreator)=>({
            ...prevCreator,
            [name]:value,
        }))
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const {error} = await supabase
                .from('creators')
                .update({
                    name:creator.name,
                    url:creator.url,
                    description:creator.description
                })
                .eq('id',id)
            if(error){
                console.error('Error updating creator:', error.message);
            }else{
                navigate(`/view/${id}`);
            }


        } catch(err){
            console.error('Error updating creator:', err.message);
        }

    }

    const deleteCreator = async(event)=>{
        event.preventDefault();

        await supabase.from('creators').delete().eq('id',id);
        window.location = '/';
    }

    return (
        <div className="EditCreator">
            {/* <h1>edit creator</h1> */}

            {creator && (
            <form >
            <label htmlFor="name">Name</label> <br/>
            <input type="text" id="name" name="name" value={creator.name} onChange={handleChange}/> <br/>

            <label htmlFor="url">URL</label> <br/>
            <input type="text" id="url" name="url"  value={creator.url} onChange={handleChange}/> <br/>

            <label htmlFor="name">Description</label> <br/>
            <input type="text" id="description"  value={creator.description} name="description" onChange={handleChange}/> <br/>

            {/* <input className="submitButton" type="submit" value="Submit" onClick={handleSubmit} /> */}
            <button className="submitButton" onClick={handleSubmit}>Submit</button>
            <button className="deleteButoon" onClick={deleteCreator}>Delete</button>

        </form>

            )}


        </div>
    )
}

export default EditCreator;