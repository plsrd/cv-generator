import React from 'react'


const WorkForm = (props) => {


  const {
    node,
    experience,
    handleChange,
    handleSubmit
  } = props

  const { 
    organization, 
    position, 
    from, 
    to, 
    description 
  } = experience


  return (
    <form  onSubmit={handleSubmit} ref={node} className='work-form'>
      <button onClick={handleSubmit} className='cancel-button'>X</button>
      <label>Organization</label>
      <input 
        name='organization' 
        value={organization}
        onChange={handleChange}
        placeholder='Organization'
        className='work-input'
        required
      />
      <label>Postition</label>
      <input 
        name='position' 
        value={position}
        onChange={handleChange}
        placeholder='Position'
        className='work-input'
        required
      />
      <div className='date-container'>
        <div>
          <label>From</label>
          <input 
            type='date'
            name='from'
            value={from}
            onChange={handleChange}
            className='date-input'
            required
          />
        </div>
        <div>
          <label>To</label>
          <input 
            type='date'
            name='to'
            value={to}
            onChange={handleChange}
            className='date-input'
            required
          />
        </div>
      </div>
      <label>Description</label>
        <textarea
          name='description'
          value={description}
          onChange={handleChange}
          className='work-input description'
          rows={5}
          required
        />
      <button type='submit' className='create-work-btn'>Create</button>
    </form>
  )
}

export default WorkForm
