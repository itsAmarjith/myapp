import React from 'react'
import Child from './Child'

function Parent() {
    const name="amrjith"
  return (
    <div>
      <Child myname={name}/>
    </div>
  )
}

export default Parent
