import React from 'react'

const Component:React.FC = ({ children }) => {

  return (
    <div>
      header
      {children}
      footer
    </div>
  )
}

export default Component
