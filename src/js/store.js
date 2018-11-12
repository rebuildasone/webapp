import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import persistedReducer from './reducers'

const configureStore = () => {
  const store = createStore(persistedReducer)

  const persistor = persistStore(store)

  return { store, persistor }
}

export default configureStore
