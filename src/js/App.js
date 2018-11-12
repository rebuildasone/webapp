import React from 'react'
import 'bootstrap'
import '../stylesheets/index.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/ui/Header'
import HomePage from './components/containers/HomePage'
import NotFound from './components/containers/NotFound'
import Footer from './components/ui/Footer'
import configureStore from './store'

const { store, persistor } = configureStore()

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter basename='/'>
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
        </PersistGate>
      </Provider>
    )
  }
}

export default App
