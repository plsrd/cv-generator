import React, { useState } from 'react'
import uniqid from 'uniqid'

import Reference from './Reference'
import ReferenceForm from './ReferenceForm'

import '../styles/reference.css'

const ReferenceSection = (props) => {
  const { preview } = props

  const [ editing, setEditing] = useState(false)

  const [ references, setReferences ] = useState([])         
  const [ reference, setReference ] = useState({  
    name: '',
    relationship: '',
    email: '',
    phone: '',
    id: uniqid()
  }) 

  const allReferences = references.map(reference => 
    <Reference 
      reference={reference} 
      key={reference.id}
      references={references}
      setReferences={setReferences}
      preview={preview}
    />
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
    setReferences([...references, reference])
    setReference({name: '',
      relationship: '',
      email: '',
      phone: '',
      id: uniqid()
    })
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setReference({...reference, [name]: value})
  }

  const handleClick = () =>  {
    setEditing(true)
  }

  if (preview === false ) {
    return (
      <div className='reference-section'>
        <div className='header'>
          <h2 className='header-text'>References</h2>
          { editing ?  <ReferenceForm
                          reference={reference}
                          handleChange={handleChange}
                          handleSubmit={handleSubmit}
                        /> : null }
          { editing ? null : <button onClick={handleClick} className='header-button'>+</button> }
        </div>
        {allReferences}
      </div>
    )
  } else {
    return (
      <div className='Reference Section'>
        <div className='header'>
          <h2 className='header-text'>References</h2>
          {allReferences}
        </div>
      </div>
    )
  }
}


export default ReferenceSection