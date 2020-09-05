import React, { useState } from 'react';
// navigate
import { navigate } from '@reach/router';
import Input from './StyleInput';
import Search from './StyleButton';
import Select from './StyleSelect';
// import axios from 'axios';

/*
    Star Wars API
    https://swapi.dev/api/ <- api root
*/


const Dropdown = props => {
    // state
    // set type to people
    const [type, setType] = useState("people");
    // ID
    const [ID, setID] = useState();
    // display
    // const [display, setDisplay] = useState({});
    // path -> {note:this is the root}
    // const path = "https://swapi.dev/"+type+"/"+ID;
    // style div
    const styleDIV = {
        display: "inline-flex",
    }
    // style label
    const styleLabel = {
        marginTop: "15px"
    }
    // useEffect
    // handleSearch
    const handleSearch = e => {
        e.preventDefault();
        // axios
        /*
                axios.get(path)
            .then(response=>{
                setDisplay(response.data.results);
                console.log(response.data.results);
            })
            .catch(err => console.log(err));
        */
        // if ID is not a number, redirect to '/yikes'
        if(isNaN(ID) === true){
            navigate('/yikes');
        }
        if(type === "people" && isNaN(ID) === false) {
            navigate("/people/"+ID);
        }
        if(type ==="planets" && isNaN(ID) === false) {
            navigate("/planets/"+ID);
        }
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
                <Input placeholder="enter ID" onChange={e=> setID(e.target.value)}/>
                <Search type="submit">Search</Search>
            </form>
            </div>
            {/* DISPLAY */}
            <div>
            {/* stuff */}
            </div>
        </div>
    );
} 

export default Dropdown;