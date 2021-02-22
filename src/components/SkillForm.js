import React from 'react'

const SkillForm= (props) => {
  const {
    name,
    handleSubmit,
    node,
    label,
    value,
    handleChange,
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
        placeholder='something useful...'
        maxLength='30'
      />
      <button 
        className='hidden' 
      ></button>
    </form>
  )
}

export default SkillForm
