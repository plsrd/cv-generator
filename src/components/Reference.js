import React, { useState } from 'react'

const Reference = (props) => {
  const {reference, references, setReferences, preview } = props
  const  {name, relationship, email, phone } = reference

  const [ editing, setEditing ] = useState({
    name: false,
    relationship: false,
    email: false,
    phone: false
  })

  const handleClick = (e) => {
    const name = e.target.className.split('-')[1]
    console.log(name)
    if (preview === false) { setEditing({...editing, [name]: true}) }
  }

  return (
    <div className='reference'>
      <h3 className='reference-name'onClick={handleClick}>{name}</h3>
      <h4 className='reference-relationship' onClick={handleClick}>{relationship}</h4>
      <div>
        <p className='reference-email' onClick={handleClick}>{email}</p>
        <p className='reference-phone' onClick={handleClick}>{phone}</p>
      </div>
    </div>
  )
}

export default Reference
