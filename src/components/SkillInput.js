import React, {useEffect, useRef} from 'react'

function SkillInput(props) {
  const {
    name,
    label,
    value,
    updateState,
    className,
    editing,
    setEditing,
    updateSkills
  } = props

  const node = useRef();

  const handleClickOutside = e  => {
    if (node.current.contains(e.target)) {
      return
    } 
    setEditing(false)
    updateState('')
  }

  const handleChange = (e) => {
    const { value } = e.target
    updateState(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditing(false)
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
  }, [ editing ])

  return (
    <form onSubmit={handleSubmit} ref={node}>
      <label>{label}</label>
      <input 
        name={name} 
        value={value}
        onChange={handleChange}
        placeholder={label}
        className= {`${className}-input`}
      />
      <button className='hidden' onClick={updateSkills}>B</button>
    </form>
  )
}

export default SkillInput
