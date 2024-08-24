import React, { useState }  from "react";
import {supabase} from '../client.js'
import './AddCreator.css'


const AddCreator = ()=>{
    // define the varibale
    const [creator, setCreator] = useState({name: "", url: "", description: ""})

    // make an asynchronous function
    const addCreator = async (event)=>{
        event.preventDefault();

        try{
            await supabase.from('creators')
            .insert([{name: creator.name, url:creator.url, description:creator.description}])
            .select();
            window.location = "/";  
        }catch(err){
            console.error('Error creating post:', err.messag);
        }

    }

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setCreator((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })
    }


    return (
        <div>
            <h1>Add creators</h1>
            <form action="">
                <label htmlFor="name">Name</label> <br/>
                <input type="text" id="name" name="name" onChange={handleChange}/> <br/>

                <label htmlFor="url">URL</label> <br/>
                <input type="text" id="url" name="url" onChange={handleChange}/> <br/>

                <label htmlFor="name">Description</label> <br/>
                <input type="text" id="description" name="description" onChange={handleChange}/> <br/>

                <input type="submit" value="Submit" onClick={addCreator} />

            </form>

        </div>
    )
}

export default AddCreator;