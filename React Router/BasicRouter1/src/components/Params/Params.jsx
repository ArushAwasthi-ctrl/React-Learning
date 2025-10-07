import React from 'react'
import {useParams} from 'react-router-dom'
function Params() {
    const {id} = useParams();
  return (
    <div className='flex justify-center items-center min-h-screen text-6xl'>Params : {id}</div>
  )
}

export default Params