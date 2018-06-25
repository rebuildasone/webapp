import React from 'react'
import { render } from 'react-dom'
import App from './App'

function renderApp (RootNode) {
  render(<RootNode />, document.getElementById('app'))
}

renderApp(App)
