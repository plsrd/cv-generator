import React, { useState } from 'react'
import EditableInput from './EditableInput'
// eslint-disable-next-line no-unused-vars
import style from '../styles/contactInfo.css'

function ContactInfo() {
  const [ firstName, setFirstName ] = useState('First Name')
  const [ lastName, setLastName ] = useState('Last Name')
  const [ occupation, setOccupation ] = useState('Occupation')
  const [ email, setEmail ] = useState('Email')
  const [ phone, setPhone ] = useState('Phone No.')
  const [ street, setStreet ] = useState('Street')
  const [ cityState, setCityState ] = useState('City/State')

  return (
    <div className='contact-info'>
      <div className='name-container'>
        <EditableInput 
            label='First Name'
            name='firstName'
            value={firstName}
            updateState={setFirstName}
            className='name'
          />
        <EditableInput 
          label='Last Name'
          name='lastName'
          value={lastName}
          updateState={setLastName}
          className='name'
        />
        <EditableInput 
          label='Occupation'
          name='occupation'
          value={occupation}
          updateState={setOccupation}
          className='occupation'
        />
      </div>
      <div className='address-container'>
        <EditableInput 
          label='Street'
          name='street'
          value={street}
          updateState={setStreet}
          className='address'
        />
        <EditableInput 
          label='City/State'
          name='cityState'
          value={cityState}
          updateState={setCityState}
          className='address'
        />
        <EditableInput 
          label='Email'
          name='email'
          value={email}
          updateState={setEmail}
          className='address'
        />
        <EditableInput 
          label='Phone No.'
          name='phone'
          value={phone}
          updateState={setPhone}
          className='address'
        />
      </div>
    </div>
  )
}

export default ContactInfo
