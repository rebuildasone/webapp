import React from 'react'
import '../stylesheets/index.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <BrowserRouter basename='/admin'>
        <div className='app'>
          <div className='app-container'>
            <Header />
            <main>
              <div className='container'>
                <div className='main-content'>
                  <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
