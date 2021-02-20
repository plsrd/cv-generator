import React, { useState, useEffect, useRef } from 'react'
import uniqid from 'uniqid'
// eslint-disable-next-line no-unused-vars
import style from '../styles/skills.css'
import SkillInput from './SkillInput'

function Skills() {
  const [ skills, setSkills ] = useState([])
  const [ editing, setEditing] = useState(false)
  const [ addSkill, setAddSkill ] = useState('') 

  const allSkills = skills.map(skill => <p 
                                          key={uniqid()} 
                                          className='skill'
                                          >{skill}</p>)

  const handleClick = () => {
    setEditing(true)
  }

  const updateSkills = () => {
    setSkills(prevState => [...prevState, addSkill])
  }

  return (
    <div className='skills-section'>
      <div className='header'>
        <h2>Skills</h2>
        { editing ? <SkillInput
                          label='Add Skill'
                          name='addSkill'
                          value={addSkill}
                          updateState={setAddSkill}
                          className='add-skill'
                          setEditing={setEditing}
                          editing={editing}
                          updateSkills={updateSkills}
                          /> : <button onClick={handleClick}>+</button>}
      </div>
      <div className='skills-container'>
        {allSkills}
      </div>
    </div>
  )
}

export default Skills
