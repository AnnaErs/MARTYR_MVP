import React from 'react'
import loadable from '@loadable/component'

import {
  Provider as TemplateProvider,
  useProvider as useTemplate
} from './provider'

const LoadableComponent = loadable(({ template }) => import(`template/${template}`), {
  cacheKey: ({ template }) => template
})

const Component:React.FC = ({ children }) => {
  const {template} = useTemplate();
  
  if (template === undefined) {
    return <>{children}</>
  }

  return (
    <LoadableComponent template={template}>
      {children}
    </LoadableComponent>
  )
}

export default Component
export {
  TemplateProvider,
  useTemplate
}
