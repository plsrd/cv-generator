import React, { useState, useRef, useEffect } from 'react'
import uniqid from 'uniqid'
import Moment from 'react-moment'
// eslint-disable-next-line no-unused-vars
import style from '../styles/skills.css'
// eslint-disable-next-line no-unused-vars
import work from '../styles/workExperience.css'
import SkillForm from './SkillForm'
import WorkForm from './WorkForm'


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

  const title = context.charAt(0).toUpperCase() + context.slice(1)


  const allSkills = skills.map(skill => <li 
                                        key={uniqid()} 
                                        className={context}
                                      >{skill}</li>)

  const allWork = experiences.map(experience => {return (
                                                <div 
                                                  key={uniqid()} 
                                                  className={context}
                                                >
                                                  <h3 className='organization'>{experience.organization}</h3>
                                                  <p className='position'>{experience.position}</p>
                                                  <div className='timing'>
                                                    <div>
                                                      <Moment format='MM-YYYY'>{experience.from}</Moment>
                                                    </div>
                                                    <div>
                                                      <Moment format='MM-YYYY'>{experience.to}</Moment>
                                                    </div>
                                                  </div>
                                                  <p className='description'>{experience.description}</p>
                                                </div>)})                                   
  

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
          label={title}
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
    }
  }

  return (
    <div className={`${context}-section`}>
      <div className='header'>
        <h2 className='header-text'>{title}</h2>
        { editing ? selectForm() : null }
        {editing ? null : <button onClick={handleClick} className='header-button'>+</button>}
      </div>
      {selectList()}
      {console.log(experiences)}
    </div>
  )
}

export default InfoSection