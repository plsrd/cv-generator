import React, { useState } from 'react'
import uniqid from 'uniqid'
// eslint-disable-next-line no-unused-vars
import style from '../styles/skills.css'
import SkillForm from './SkillForm'


const InfoSection = (props) => {
  const {
    context,
  } = props

  const title = context.charAt(0).toUpperCase() + context.slice(1)

  const [ skills, setSkills ] = useState([])
  const [ editing, setEditing] = useState(false)
  const [ skillInput, setSkillInput ] = useState('') 

  const allSkills = skills.map(item => <li 
                                        key={uniqid()} 
                                        className={context}
                                      >{item}</li>)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
    if (context === 'skill') {
      setSkills(prevState => [...prevState, skillInput])
      setSkillInput('')
    }
  }
 
  const handleChange = (e) => {
    const { value } = e.target
    setSkillInput(value)
  }

  const handleClick = () =>  {
    setEditing(true)
  }

  return (
    <div className={`${context}-section`}>
      <div className='header'>
        <h2 className='header-text'>{title}</h2>
        { (editing && context === 'skill') ? 
                    <SkillForm 
                      handleSubmit={handleSubmit}
                      name={skillInput}
                      label={title}
                      value={skillInput}
                      handleChange={handleChange}
                      className={`skill-input`}
                    /> : <button onClick={handleClick} className='header-button'>+</button>}
      </div>
      <ul className={`${context}-container`}>
        {allSkills}
      </ul>
    </div>
  )
}

export default InfoSection