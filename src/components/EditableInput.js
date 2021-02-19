import React, { useState, useEffect, useRef } from 'react'

function EditableInput(props) {
  const [ editing, setEditing ] = useState(false)
  const node = useRef();

  const handleClickOutside = e  => {
    if (node.current.contains(e.target)) {
      //click inside
      return
    } 

    setEditing(false)
  }


  const {
    name,
    label,
    value,
    updateState,
    className
  } = props

  const handleChange = (e) => {
    const { value } = e.target
    updateState(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
  }, [editing]);

  if(editing === true) {
    return (
      <div onSubmit={handleSubmit} ref={node}>
        <label> {label} </label>
        <input
          name={name} 
          value={value}
          onChange={handleChange}
          placeholder={label}
          className= {`${className}-input`}
        />
      </div>
    )
  } else {
    return <p 
              onClick= {() => setEditing(true)}
              className={className}
            > {value}</p>
  }

}

export default EditableInput
