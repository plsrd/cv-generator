
import React, { useState } from 'react'
import ContactInfo from './components/ContactInfo'
// eslint-disable-next-line no-unused-vars
import reset from './styles/reset.css'
// eslint-disable-next-line no-unused-vars
import style from './styles/app.css'

import InfoSection from './components/InfoSection'

const App = () => {
  const [preview, setPreview] = useState(false)
  
  const handleFormSubmit = e => {
    e.preventDefault()
    setPreview(true)
  }

  const handleClick = () => {
    setPreview(false)
  }

  const drawForm = () => {
    return (
      <form onSubmit={handleFormSubmit}>
        <ContactInfo
          preview={preview}
        />
        <button>Preview</button>
      </form>
    )
  }

  const drawPreview = () => {
    return (
      <div>
        <h1>Tiddysnips</h1>
        <button onClick={handleClick}>edit</button>
      </div>
    )
  }

  return (
    <div className='app'>
      {preview === true  ? drawPreview() : drawForm()}
    </div>
  )
}

export default App;
