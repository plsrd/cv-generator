import React from 'react'

const ReferenceForm = (props) => {
  const {
    reference,
    handleChange,
    handleSubmit
  } = props

  const {
    name, 
    relationship,
    email,
    phone
  } = reference

  return (
    <form onSubmit={handleSubmit} className='reference-form'>
      <label>Name</label>
      <input 
        name='name'
        value={name}
        onChange={handleChange}
        placeholder='Name'
        required
      />
      <label>Relationship</label>
      <input 
        name='relationship'
        value={relationship}
        onChange={handleChange}
        placeholder='Relationship'
        required
      />
      <label>Email</label>
      <input 
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='Email'
        required
      />
      <label>Phone</label>
      <input 
        name='phone'
        value={phone}
        onChange={handleChange}
        placeholder='Phone'
        required
      />
      <button type='submit'>Create</button>
    </form>
  )
}

export default ReferenceForm