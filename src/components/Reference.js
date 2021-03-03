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

  const [ editedReference, setEditedReference ] = useState(reference)

  const handleClick = (e) => {
    const name = e.target.className.split('-')[1]
    if (preview === false) { setEditing({...editing, [name]: true}) }
  }

  const handleSubmit = (e) => {
    const name = e.target[0].name
    e.preventDefault()
    const updatedReferences = references.map(reference => {
      if (reference.id === editedReference.id) {
        return editedReference
      } else {
        return reference
      }
    })
    setReferences(updatedReferences)
    setEditing({...editing, [name]: false})
  }

  const handleChange = (e) =>  {
    const { value, name } = e.target
    setEditedReference({...reference, [name]: value})
  }

  const createInput = (key) =>  {
    return (
      <form onSubmit={handleSubmit}>
        <label>{key}</label>
        <input 
          type={(key !== 'to' && key !== 'from') ? 'text' : 'date'}
          name={key}
          value={editedReference[key]}
          onChange={handleChange} 
        /> 
        <button>Update!</button>
      </form>
    )
  }

  return (
    <div className='reference'>
      { editing.name ? 
          createInput('name') : 
          <h3 className='reference-name'onClick={handleClick}>{name}</h3>
      }
      { editing.relationship ? 
          createInput('relationship') : 
          <h4 className='reference-relationship' onClick={handleClick}>{relationship}</h4>
      }
      <div>
        { editing.email ? 
            createInput('email') : 
            <p className='reference-email' onClick={handleClick}>{email}</p>
        }
        { editing.phone ? 
            createInput('phone') : 
            <p className='reference-phone' onClick={handleClick}>{phone}</p>
        }
      </div>
    </div>
  )
}

export default Reference
