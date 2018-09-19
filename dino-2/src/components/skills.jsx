import React from 'react'

const Skills = (props) => {
    let listSkills = props.skills.skills.map((item, i) => {
        return (
            <li key={i}>
                {item}
            </li>
        )
    })
    return(
        <div>
            <h4>Skills</h4>
            <ul className="skills-list">
                {listSkills} 
            </ul>
        </div>        
    )
    
}


export default Skills