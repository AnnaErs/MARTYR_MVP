import React from 'react'
import loadable from '@loadable/component'

import Error from 'components/Error'

import { TSection } from 'types/application'

const LoadableComponent = loadable(({ section }) => import(`sections/${section}`), {
  cacheKey: ({ section }) => section,
  fallback: <p>...loading</p>
})

type TComponent = TSection

const Component:React.FC<TComponent> = ({ name, ...props }) => {

  return (
    <Error name={name}>
      <LoadableComponent section={name} {...props} />
    </Error>
  )
}

export default Component
