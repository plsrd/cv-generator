import React, { useState, useEffect, useRef } from 'react'


function EditableInput(props) {
  const [ editing, setEditing ] = useState(false)
  const node = useRef();

  const {
    name,
    label,
    value,
    updateState,
    className
  } = props


  const handleClickOutside = e  => {
    if (node.current.contains(e.target)) {
      return
    } 
    if (value === '') { 
      updateState(label)
      setEditing(false) 
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    updateState(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    setEditing(true)
    updateState('')
  }
  useEffect(() => {
    if (editing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ editing ]);

  if(editing === true) {
    return (
      <form onSubmit={handleSubmit} ref={node}>
        <label> {label} </label>
        <input
          name={name} 
          value={value}
          onChange={handleChange}
          placeholder={label}
          className= {`${className}-input`}
        />
        <button>{(editing === true && value !== '') ? 'Update' : '+'}</button>
      </form>
    )
  } else {
    return <p 
              onClick= {handleClick}
              className={className}
            >{value}</p>
  }

}

export default EditableInput
