import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

import routes from 'src/pages'

ReactDOM.render(<App pages={routes} />, document.getElementById('app'))
