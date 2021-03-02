import React, { useState, useEffect, useRef } from 'react'


const EditableInput = (props) => {
  const [ editing, setEditing ] = useState(false)
  const node = useRef();

  const {
    name,
    label,
    value,
    handleChange,
    className
  } = props



  const handleClick = () => {
    setEditing(true) 
  }

  const handleSubmit = () => {
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


  if(editing === true) {
    return (
      <div ref={node}>
        <label> {label} </label>
        <input
          name={name} 
          value={value}
          onChange={handleChange}
          placeholder={label}
          className= {`${className}-input`}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    )
  } else {
    return <p onClick={handleClick} className={className}>{value === '' ? getName() : value}</p>
  }

}

export default EditableInput
