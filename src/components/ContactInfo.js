import React, { useState } from 'react'
import EditableInput from './EditableInput'
// eslint-disable-next-line no-unused-vars
import '../styles/contactInfo.css'

const ContactInfo= (props) => {
  const { preview } = props

  const [ contactInfo, setContactInfo ] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
    email: '',
    phone: '',
    street: '',
    cityState: '',
  })

  const handleChange = (e) => {
    const { value, name } = e.target
    setContactInfo({...contactInfo, [name]: value })
  }

  return (
    <div className='contact-info'>
      <div className='name-container'>
        <EditableInput 
            label='First Name'
            name='firstName'
            value={contactInfo.firstName}
            handleChange={handleChange}
            className='name'
            preview={preview}
          />
        <EditableInput 
          label='Last Name'
          name='lastName'ß
          value={contactInfo.lastName}
          handleChange={handleChange}
          className='name'
          preview={preview}
        />
        <EditableInput 
          label='Occupation'
          name='occupation'
          value={contactInfo.occupation}
          handleChange={handleChange}
          className='occupation'
          preview={preview}
        />
      </div>
      <div className='address-container'>
          <EditableInput 
            label='Street'
            name='street'
            value={contactInfo.street}
            handleChange={handleChange}
            className='address'
            preview={preview}
          />
          <EditableInput 
            label='City/State'
            name='cityState'
            value={contactInfo.cityState}
            handleChange={handleChange}
            className='address'
            preview={preview}
          />
          <EditableInput 
            label='Email'
            name='email'
            value={contactInfo.email}
            handleChange={handleChange}
            className='address'
            preview={preview}
          />
          <EditableInput 
            label='Phone No.'
            name='phone'
            value={contactInfo.phone}
            handleChange={handleChange}
            className='address'
            preview={preview}
          />
        </div>
    </div>
  )
}

export default ContactInfo
