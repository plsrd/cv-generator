import React, { useState, useEffect, useRef } from 'react'


const EditableInput = (props) => {
  const [ editing, setEditing ] = useState(false)
  const node = useRef();

  const {
    name,
    label,
    value,
    handleChange,
    className,
    preview
  } = props

  const handleClick = () => {
    if (preview === false) {
      setEditing(true) 
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
  }

  const handleClickOutside = e  => {
    if (node.current.contains(e.target)) {
      return
    } 
    setEditing(false)
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
  }, [ editing ])

  const getName = () => {
    let result = name.replace( /([A-Z])/g, " $1" );
    return result.charAt(0).toUpperCase() + result.slice(1);  
  }

  if(editing === true && preview === false) {
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
        <button>Add</button>
      </form>
    )
  } else {
    return <p onClick={handleClick} className={className}>{value === '' ? getName() : value}</p>
  }

}

export default EditableInput
