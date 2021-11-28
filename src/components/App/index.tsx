import React from 'react'

import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'

import { TApplication } from 'src/types/application'

import Page from 'components/Page'
import Provider from 'components/Provider'
import Template from 'components/Template'

type TProps = TApplication

const App:React.FC<TProps> = ({ pages }) => {

  /* Хочу формирование HTML по JSON */
  return (
    <Provider>
      <Template>
        <Router>
          <Link to="/123">Hello 1</Link>
          <Link to="/">Hello 2</Link>
          <Link to="/qwe/qwe">Hello 3</Link>
          <Switch>
            {pages.map((props, index) => <Page {...props} key={`page-${index}`} />)}
          </Switch>
        </Router>
      </Template>
    </Provider>
  )
}

export default App
