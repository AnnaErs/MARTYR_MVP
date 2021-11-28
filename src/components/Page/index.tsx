import React from 'react'
import { Route } from 'react-router-dom'

import { TPage } from 'types/application'

import Section from 'components/Section'

import { useTemplate } from 'src/hooks'

type TComponent = TPage

const Component:React.FC<TComponent> = ({ sections, title, template, ...props }) => {
  const {setTemplate} = useTemplate()
  setTemplate(template)

  React.useEffect(() => {
    document.title = title
  }, [])

  return (
    <Route {...props}>
      {sections.map((props, index) => <Section {...props} key={`section-${index}`} />)}
    </Route>
  )
}

export default Component
