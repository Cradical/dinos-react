import React from 'react';
import '../dino.css'
import './cards'
import Cards from './cards';

const Profiles = (props) => {
    let object_item = props.data.map((item, i) => {
        return <Cards key={i} cardData={item} />
    })
    return(
        <div>
            <h2>Profiles</h2>
            <ul>
                {object_item}
            </ul>
        </div>

    )
}

export default Profiles