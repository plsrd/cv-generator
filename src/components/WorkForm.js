import React, { useState } from 'react'

const WorkForm = (props) => {
  const [ experience, setExperience ] = useState({
    organization: '',
    position: '',
    from: '',
    to: '',
    description: '',
  })

  const {
    node,
    className,
    handleWorkForm
  } = props

  const handleChange = (e) => {
    const { value, name } = e.target
    setExperience({...experience, [name]: value})
  }

  const handleSubmit = () => {
    handleWorkForm(experience)
  }

  return (
    <form onSubmit={handleSubmit} ref={node}>
      <label>Organization</label>
      <input 
        name='organization' 
        value={experience.organization}
        onChange={handleChange}
        placeholder={'Organization'}
        className= {`${className}-input`}
      />
      <label>Postition</label>
      <input 
        name='position' 
        value={experience.position}
        onChange={handleChange}
        placeholder={'Position'}
        className= {`${className}-input`}
      />
      <div className='date-container'>
        <label>From</label>
        <input 
          type='date'
          name='from'
          value={experience.from}
          onChange={handleChange}
          className= {`${className}-input`}
        />
        <label>To</label>
        <input 
          type='date'
          name='to'
          value={experience.to}
          onChange={handleChange}
          className= {`${className}-input`}
        />
      </div>
      <label>Description</label>
        <textarea
          name='description'
          value={experience.description}
          onChange={handleChange}
          className= {`${className}-input`}
        />
      <button type='submit'>Create</button>
    </form>
  )
}

export default WorkForm
