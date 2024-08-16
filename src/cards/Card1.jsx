import React from 'react'
import"./Card1.css";

const Card1 = ({onstart}) => {
    
  return (
    <div className='front'>
      
        <button className='button' onClick={onstart}> start
            
        </button>
        
        </div>
  )
}

export default Card1