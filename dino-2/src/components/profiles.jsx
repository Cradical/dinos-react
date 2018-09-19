import React from 'react';
import '../dino.css'
import './cards'
import Cards from './cards';

const Profiles = (props) => {
console.log('props: ', props.data)

let object_item = props.data.map((item, i) => {
    console.log('item_from_map: ', item)
    return <Cards cardData={item} />
})
console.log('object_item: ', object_item)
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