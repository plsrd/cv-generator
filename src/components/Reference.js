import React from 'react'

const Reference = (props) => {
  const {
    name, 
    relationship,
    email,
    phone
  } = props.data

  return (
    <div className='reference'>
      <h3 className='reference-name'>{name} - {relationship}</h3>
      <div>
        <p className='reference-email'>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  )
}

export default Reference
