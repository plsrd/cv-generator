import React, { useState } from 'react'
import uniqid from 'uniqid'
import SkillForm from './SkillForm'

import '../styles/skills.css'

const SkillSection = (props) => {
  const { preview } = props

  const [ editing, setEditing] = useState(false)
  const [ skills, setSkills ] = useState([])
  const [ skillInput, setSkillInput ] = useState('')

  const handleSkillClick = (e) => {
    if (preview !== true) {
      const content = e.target.innerText
      const newSkills = skills.filter(skill => skill !== content)
      setSkills(newSkills)
    }
  }

  const allSkills = skills.map(skill => 
    <li 
      key={uniqid()} 
      className='skill'
      onClick={handleSkillClick}
    >{skill}</li>)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
    if (skillInput !== '') {
      setSkills([...skills, skillInput])
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

  if (preview === false) {
    return (
      <div className='skill-section'>
        <div className='header'>
          <h2 className='header-text'>Skills</h2>
          { editing ? <SkillForm
                          handleSubmit={handleSubmit}
                          name={skillInput}
                          label='skill'
                          value={skillInput}
                          handleChange={handleChange}
                          className={`skill-input`}
                        /> : null }
          { editing ? null : <button onClick={handleClick} className='header-button'>+</button> }
        </div>
        <ul className='skill-container'>
          {allSkills}
        </ul>
      </div>
    )
  } else {
      return (
        <div className='skill-section'>
          <div className='header'>
            <h2 className='header-text'>Skills</h2>
            <ul className='skill-container'>
                  {allSkills}
            </ul>
          </div>
        </div>
      )
    }
}

export default SkillSection