import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ForwardToHome() {

    const navigate = useNavigate()
    useEffect ( () => {
        navigate('../home')
    }, [])
  return (
    <div>ForwardToHome</div>
  )
}

export default ForwardToHome