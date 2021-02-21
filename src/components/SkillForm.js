import React from 'react'

const SkillForm= (props) => {
  const {
    name,
    handleSubmit,
    node,
    label,
    value,
    handleChange,
    className,
    updateItems
  } = props

  return (
    <form 
      onSubmit={handleSubmit} 
      ref={node}
    >
      <label>{label}</label>
      <input 
        name={name} 
        value={value}
        onChange={handleChange}
        placeholder={label}
        className= {`${className}-input`}
      />
      <button 
        className='hidden' 
      ></button>
    </form>
  )
}

export default SkillForm
