import React from 'react';
import Input from './StyleInput';
import Search from './StyleButton';
import Select from './StyleSelect';

const Planet = props => {
    return(
    <div>
        {/* PLANETS */}
        <div>
            <h1>PLANETS</h1>
            <form>
            {/* people and planets */}
                <Select>
                    <option>people</option>
                    <option>planets</option>
                </Select>
                {/* ID selection */}
                <Input placeholder="enter ID"/>
                <Search>Search</Search>
            </form>
        </div>
        <div>
            <h1>{props.name}</h1>
            <p>{props.climate}</p>
            <p>{props.terrain}</p>
            <p>{props.surface_water}</p>
            <p>{props.population}</p>
        </div>
    </div>
    );
}

export default Planet;