import React, { useState } from 'react'
import Moment from 'react-moment'


const Work = (props) => {
  const { experiences, setExperiences, experience, preview } = props
  const { organization, position, from, to, description } = experience

  const [ editing, setEditing ] = useState({
    organization: false,
    position: false,
    to: false,
    from: false,
    description: false
  })
  const [ editedExperience, setEditedExperience ] = useState(experience)


  const handleChange = (e) =>  {
    const { value, name } = e.target
    setEditedExperience({...experience, [name]: value})
  }

  const handleSubmit = (e) => {
    const name = e.target[0].name
    e.preventDefault()
    const updatedExperiences = experiences.map( experience => {
      if (experience.id === editedExperience.id) {
        return editedExperience
      } else {
        return experience
      }
    })
    setExperiences(updatedExperiences)
    setEditing({...editing, [name]: false})
  }

  const createInput = (key) =>  {
    return (
      <form onSubmit={handleSubmit}>
        <label>{key}</label>
        <input 
          type={(key !== 'to' && key !== 'from') ? 'text' : 'date'}
          name={key}
          value={editedExperience[key]}
          onChange={handleChange} 
        /> 
        <button>Update!</button>
      </form>
    )
  }

  const handleClick = (e) => {
    const { className } = e.target
    if (preview === false) { setEditing({...editing, [className]: true}) }
  }

  return (
    <div className='work'>
      {editing.organization ?  createInput('organization') : <h3 className='organization' onClick={handleClick}>{organization}</h3>}
      {editing.position ?  createInput('position') : <p className='position' onClick={handleClick}>{position}</p>}
      <div className='timing'>
        <div>
        {editing.from ?  createInput('from') : <Moment format='MMMM YYYY' className='from' onClick={handleClick}>{from}</Moment>}
        </div>
        <p>--</p>
        <div>
        {editing.to ?  createInput('to') : <Moment format='MMMM YYYY' className='to' onClick={handleClick}>{to}</Moment>}
        </div>
      </div>
      {editing.description ?  createInput('description') : <p className='description' onClick={handleClick}>{description}</p>}
    </div>)
}

export default Work
