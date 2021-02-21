import React from 'react'


const WorkForm = (props) => {


  const {
    node,
    experience,
    handleChange,
    handleSubmit
  } = props


  return (
    <form  onSubmit={handleSubmit} ref={node}>
      <label>Organization</label>
      <input 
        name='organization' 
        value={experience.organization}
        onChange={handleChange}
        placeholder={'Organization'}
        className='work-input'
      />
      <label>Postition</label>
      <input 
        name='position' 
        value={experience.position}
        onChange={handleChange}
        placeholder={'Position'}
        className='work-input'
      />
      <div className='date-container'>
        <label>From</label>
        <input 
          type='date'
          name='from'
          value={experience.from}
          onChange={handleChange}
          className='work-input'
        />
        <label>To</label>
        <input 
          type='date'
          name='to'
          value={experience.to}
          onChange={handleChange}
          className='work-input'
        />
      </div>
      <label>Description</label>
        <textarea
          name='description'
          value={experience.description}
          onChange={handleChange}
          className='work-input'
        />
      <button type='submit'>Create</button>
    </form>
  )
}

export default WorkForm
