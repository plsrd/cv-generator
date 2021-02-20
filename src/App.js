
import React from 'react'
import ContactInfo from './components/ContactInfo'
// eslint-disable-next-line no-unused-vars
import reset from './styles/reset.css'
import style from './styles/app.css'

import InfoSection from './components/InfoSection'

const App = () => {
 

  
  return (
    <div className='app'>
      <ContactInfo />
      <InfoSection context='skill' />
      <InfoSection context='work' />
    </div>
  )
}

export default App;
