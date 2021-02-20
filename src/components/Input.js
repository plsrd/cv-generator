import React, { useEffect, useRef } from 'react'
import SkillForm from './SkillForm'
import WorkForm from './WorkForm'


const Input = (props) => {
  const {
    name,
    label,
    value,
    updateState,
    className,
    editing,
    setEditing,
    updateItems,
    setItemToAdd
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

  const handleWorkForm = (object) => {
    console.log(object)
    setEditing(false)
    setItemToAdd(object)
    updateItems()
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


  if (name === 'addSkill') {
    return (
      <SkillForm 
        handleSubmit={handleSubmit}
        name={name}
        node={node}
        label={label}
        value={value}
        handleChange={handleChange}
        className={className}
        updateItems={updateItems}
      />
    )
  } else if (name === 'addWork') {
    return (
      <div>
      <WorkForm 
        node={node}
        className={className}
        handleWorkForm={handleWorkForm}
      />
      </div>
    )
  }

}

export default Input
