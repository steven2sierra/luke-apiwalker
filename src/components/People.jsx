import React, { useState, useEffect } from 'react';
import Search from './StyleButton';
import Input from './StyleInput';
import Select from './StyleSelect';
import axios from 'axios';
import { navigate } from '@reach/router';

/*
    Star Wars API
    https://swapi.dev/api/ <- api root
*/

const People = props => {
    // display people info
    const [type, setType] = useState("people");
    const [id, setID] = useState();
    const [people, setPeople] = useState([]);
    // const url = "https://swapi.dev/"+type+"/${ID}";
    // useEffect
        useEffect( () => {
            axios.get(`https://swapi.dev/people/${id}`)
                .then(res => setPeople(res.results))
        }, [id]);
    // handle search
    const handleSearch = e => {
        e.preventDefault();
        // if ID is not a number, redirect to '/yikes'
        if(isNaN(id) === true){
            navigate('/yikes');
        }
        if(type === "people" && isNaN(id) === false ) {
            navigate('/people/'+id);
        }
        if(type ==="planets" && isNaN(id) === false) {
            navigate("/planets/"+id);
        }
    }
    const styleDIV = {
        display: "inline-flex",
    }
    // style label
    const styleLabel = {
        marginTop: "15px"
    }
    return(
        <div>
        <h1>Search</h1>
        {/* select with options from Star Wars API */}
        {/* people and planets */}
        {/* search result based on ID */}
        <div style = {styleDIV}>
        <label style={styleLabel}>
            Search for:
        </label>
        {/* onSubmit */}
        <form onSubmit={handleSearch}>
            {/* people and planets , target the value */}
            <Select onChange={e => setType(e.target.value) }>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </Select>
            {/* ID selection */}
            <Input placeholder="enter ID" onChange={e => setID(e.target.value)} value={id}/>
            <Search type="submit">Search</Search>
        </form>
        </div>
        {/* DISPLAY */}
        <div>
        <div>
        {people.map((p)=>{
                return (
                    <div>
                        <ul>
                <li key={p.id}>{p.name}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
        </div>
    </div>
    );
}

export default People;