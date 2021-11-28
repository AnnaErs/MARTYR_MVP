import React from 'react'

import { TemplateProvider } from 'components/Template'

const Component:React.FC = ({ children }) => {

  return (
    <TemplateProvider>
      { children }
    </TemplateProvider>
  )
}

export default Component
