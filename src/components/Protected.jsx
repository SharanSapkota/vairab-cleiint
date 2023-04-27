import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    localStorage.getItem('token') && setIsAuthenticated(true)  

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected