import React from 'react'
import Moment from 'react-moment'

const Work = (props) => {
  const { organization, position, from, to, description, id } = props.data

  return (
    <div className='work' key={id}>
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
      <p>{id}</p>
    </div>)
}

export default Work
