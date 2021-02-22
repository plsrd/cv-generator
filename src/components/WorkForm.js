import React from 'react'


const WorkForm = (props) => {


  const {
    node,
    experience,
    handleChange,
    handleSubmit
  } = props


  return (
    <form  onSubmit={handleSubmit} ref={node} className='work-form'>
      <label>Organization</label>
      <input 
        name='organization' 
        value={experience.organization}
        onChange={handleChange}
        placeholder={'Organization'}
        className='work-input'
        required
      />
      <label>Postition</label>
      <input 
        name='position' 
        value={experience.position}
        onChange={handleChange}
        placeholder={'Position'}
        className='work-input'
        required
      />
      <div className='date-container'>
        <div>
          <label>From</label>
          <input 
            type='date'
            name='from'
            value={experience.from}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>To</label>
          <input 
            type='date'
            name='to'
            value={experience.to}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <label>Description</label>
        <textarea
          name='description'
          value={experience.description}
          onChange={handleChange}
          className='work-input description'
          rows={5}
          required
        />
      <button type='submit'>Create</button>
    </form>
  )
}

export default WorkForm
