
import React, { useState } from 'react'

import './styles/reset.css'
import './styles/app.css'

import ContactInfo from './components/ContactInfo'
import SkillSection from './components/SkillSection'
import WorkSection from './components/WorkSection'
import ReferenceSection from './components/ReferenceSection'

const App = () => {
  const [preview, setPreview] = useState(false)

  const handleClick = () => {
    preview ? setPreview(false) : setPreview(true)
  }

  return (
    <div>
      <ContactInfo preview={preview}/>
      <SkillSection preview={preview}/>
      <WorkSection preview={preview} />
      <ReferenceSection preview={preview} />
      <button onClick={handleClick}>{preview ? 'Edit' : 'Preview'}</button>
    </div>
  )
}

export default App;
