import React, { useState } from 'react'
import EditableInput from './EditableInput'

function ContactInfo() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')

  return (
    <div className='contact-info'>
      <EditableInput 
          label='Name'
          name='name'
          value={name}
          updateState={setName}
        />
        <EditableInput 
          label='Email'
          name='email'
          value={email}
          updateState={setEmail}
        />
        <EditableInput 
          label='Phone'
          name='phone'
          value={phone}
          updateState={setPhone}
        />
    </div>
  )
}

export default ContactInfo
