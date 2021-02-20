import React, { useState } from 'react'
import uniqid from 'uniqid'
// eslint-disable-next-line no-unused-vars
import style from '../styles/skills.css'
import Input from './Input'


const InfoSection = (props) => {
  const {
    context,
  } = props

  const title = context.charAt(0).toUpperCase() + context.slice(1)

  const [ skills, setSkills ] = useState([])
  const [ editing, setEditing] = useState(false)
  const [ skillToAdd, setSkillToAdd ] = useState('') 

  const allSkills = skills.map(item => <li 
                                        key={uniqid()} 
                                        className={context}
                                      >{item}</li>)

  const handleClick = () => {
    setEditing(true)
  }

  const updateItems = () => {
    if (context === 'skill') {setSkills(prevState => [...prevState, skillToAdd])}
  }

  return (
    <div className={`${context}-section`}>
      <div className='header'>
        <h2 className='header-text'>{title}</h2>
        { (editing && context === 'skill') ? 
                    <Input
                      label={`Add ${title}`}
                      name={`add${title}`}
                      value={skillToAdd}
                      updateState={setSkillToAdd}
                      className={`add-${context}`}
                      setEditing={setEditing}
                      editing={editing}
                      updateItems={updateItems}
                    /> : <button onClick={handleClick} className='header-button'>+</button>}
      </div>
      <ul className={`${context}-container`}>
        {allSkills}
      </ul>
    </div>
  )
}

export default InfoSection