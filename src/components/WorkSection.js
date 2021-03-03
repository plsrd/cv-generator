import React, { useState } from 'react'
import Work from './Work'
import WorkForm from './WorkForm'
import uniqid from 'uniqid'

import '../styles/workExperience.css'

const WorkSection = (props) => {
  const { preview } = props

  const [ editing, setEditing] = useState(false)
  const [ experiences, setExperiences] = useState([])
  const [ experience, setExperience ] = useState({
    organization: '',
    position: '',
    from: '',
    to: '',
    description: '',
    id: uniqid()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
    setExperiences([...experiences, experience])
      setExperience({
        organization: '',
        position: '',
        from: '',
        to: '',
        description: '',
        id: uniqid()
      })
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setExperience({...experience, [name]: value})
  }

  const handleClick = () =>  {
    setEditing(true)
  }

  const allWork = experiences.map(experience => 
    <Work 
      experience={experience} 
      key={experience.id} 
      experiences={experiences} 
      setExperiences={setExperiences}
      preview={preview}
      />
  )
  
  if (preview === false ){
    return (
      <div className={'work-section'}>
        <div className='header'>
          <h2 className='header-text'>Work Experience</h2>
          { editing ? <WorkForm
                        experience={experience}
                        className='work-form'
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                      /> : null }
          { editing ? null : <button onClick={handleClick} className='header-button'>+</button> }
        </div>
        {allWork}
      </div>
    )
  } else {
    return (
      <div className={'work-section'}>
        <div className='header'>
          <h2 className='header-text'>Work Experience</h2>
          {allWork}
        </div>
      </div>
    )
  }
  
}

export default WorkSection