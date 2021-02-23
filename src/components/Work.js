import React from 'react'
import uniqid from 'uniqid'
import Moment from 'react-moment'

const Work = (props) => {
  const { data } = props
  const { organization, position, from, to, description } = data

  return (
    <div 
      key={uniqid()} 
      className='work'
    >
      <h3 className='organization'>{organization}</h3>
      <p className='position'>{position}</p>
      <div className='timing'>
        <div>
          <Moment format='MMMM YYYY'>{from}</Moment>
        </div>
        <p>--</p>
        <div>
          <Moment format='MMMM YYYY'>{to}</Moment>
        </div>
      </div>
      <p>{description}</p>
    </div>)



}

export default Work
