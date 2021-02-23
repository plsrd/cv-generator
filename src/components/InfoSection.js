import React, { useState, useRef, useEffect } from 'react'
import uniqid from 'uniqid'
// eslint-disable-next-line no-unused-vars
import style from '../styles/skills.css'
// eslint-disable-next-line no-unused-vars
import work from '../styles/workExperience.css'
import SkillForm from './SkillForm'
import WorkForm from './WorkForm'
import Work from './Work'
import ReferenceForm from './ReferenceForm'


const InfoSection = (props) => {
  const {
    context,
  } = props

  const [ editing, setEditing] = useState(false)

  const [ skills, setSkills ] = useState([])
  const [ skillInput, setSkillInput ] = useState('') 

  const [ experiences, setExperiences] = useState([])
  const [ experience, setExperience ] = useState({
                                                  organization: '',
                                                  position: '',
                                                  from: '',
                                                  to: '',
                                                  description: '',
                                                })

  const [ references, setReferences ] = useState([])         
  const [ reference, setReference ] = useState({
                                                name: '',
                                                relationship: '',
                                                email: '',
                                                phone: ''
                                              })                                   

  const selectHeaderText = () => {
    switch (context) {
      case 'work' : 
        return 'Work Experience'
      case 'skill' : 
        return 'Skills'
      case 'reference' :
        return 'References'
      default: 
        return
    }
  }

  const handleSkillClick = (e) => {
    const content = e.target.innerText
    const newSkills = skills.filter(skill => skill !== content)
    setSkills(newSkills)
  }

  const allSkills = skills.map(skill => <li 
                                        key={uniqid()} 
                                        className={context}
                                        onClick={handleSkillClick}
                                      >{skill}</li>)

  const allWork = experiences.map(experience => <Work data={experience} />)
                                     

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
    if (context === 'skill') {
      setSkills([...skills, skillInput])
      setSkillInput('')
    } else if (context === 'work') {
      setExperiences([...experiences, experience])
      setExperience({
        organization: '',
        position: '',
        from: '',
        to: '',
        description: '',
      })
    } else {
      setReferences([...references, reference])
      setReference({name: '',
                    relationship: '',
                    email: '',
                    phone: ''})
                  }
  }
 
  const handleChange = (e) => {
    const { value, name } = e.target
    switch (context) { 
      case 'skill' :
        setSkillInput(value) 
        break;
      case 'work' :
        setExperience({...experience, [name]: value})
        break;
      case 'reference' :
        setReference({...reference, [name]: value})
        break;
      default :
        return;
    }
  }

  const handleClick = () =>  {
    setEditing(true)
  }

  const node = useRef();
  const handleClickOutside = e  => {
    if (node.current.contains(e.target)) {
      return
    } 
    setEditing(false)
  }

  useEffect(() => {
    if (editing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ editing ])

  const selectForm = () => {
    if (context === 'skill') { 
      return (
        <SkillForm 
          handleSubmit={handleSubmit}
          name={skillInput}
          label={context}
          value={skillInput}
          handleChange={handleChange}
          className={`skill-input`}
          node={node}
        />
      )
    } else if (context === 'work') {
      return (
        <WorkForm
          node={node}
          experience={experience}
          className='work-form'
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )
    } else {
      return (
        <ReferenceForm
          node={node}
          reference={reference}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )
    }
  }

  const selectList = () => {
    if (context === 'skill') {
      return (
        <ul className='skill-container'>
        {allSkills}
      </ul>
      )
    } else if (context === 'work') {
      return (
        <div className='work-container'>
          {allWork}
        </div>
      )
    } else {
      <div className='reference-container'>

      </div>
    }
  }

  return (
    <div className={`${context}-section`}>
      <div className='header'>
        <h2 className='header-text'>{selectHeaderText()}</h2>
        { editing ? selectForm() : null }
        { editing ? null : <button onClick={handleClick} className='header-button'>+</button> }
      </div>
      {selectList()}
    </div>
  )
}

export default InfoSection