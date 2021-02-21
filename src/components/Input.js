import React, { useEffect, useRef } from 'react'


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




  if (name === 'addSkill') {
    return (
      
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
const node = useRef();

const handleClickOutside = e  => {
  if (node.current.contains(e.target)) {
    return
  } 
  setEditing(false)
  updateState('')
}

const handleWorkForm = (object) => {
  console.log(object)
  setEditing(false)
  setItemInput(object)
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

