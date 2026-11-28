import React from 'react'

function Event() {
    const handleclick=()=>{
        alert("button clicked")
    }
  return (
    <div>
      <button type="button" onClick={handleclick}>click me</button>
    </div>
  )
}

export default Event
