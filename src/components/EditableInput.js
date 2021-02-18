import React, { useState } from 'react'

function EditableInput(props) {
  const [ editing, setEditing ] = useState(true)
  const [ empty, setEmpty ] = useState('')

  const {
    name,
    label,
    value,
    updateState
  } = props

  const handleChange = (e) => {
    const { value } = e.target
    updateState(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value !== '') {
      setEditing(false)
      setEmpty(false)
    } else {
      setEmpty(true)
    }
  }

  if(editing === true) {
    return (
      <form onSubmit={handleSubmit}>
        <label> {label} </label>
        <input
          name={name} 
          value={value}
          onChange={handleChange}
          placeholder={label}
        />
        <button>{(editing === true && value !== '') ? 'Update' : '+'}</button>
      </form>
    )
  } else {
    return <button 
              onClick= {() => setEditing(true)}
              className={empty === true ? 'empty' : null}
            > {value}</button>
  }

}

export default EditableInput