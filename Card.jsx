import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.user} />
      <h1>{props.user}</h1>
      <p>Age: {props.age}</p>
      <button className='btn'>View Profile</button>
    </div>
  )
}
    
export default Card

