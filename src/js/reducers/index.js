import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import * as appActions from '../actions/actions'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const expiresIn = (state = {isLoading: false, data: [], error: {}}, action) => {
  if (action.type === appActions.SET_EXPIRES_IN) {
    return action.payload
  }
  return state
}

const userToken = (state = {isLoading: false, data: [], error: {}}, action) => {
  if (action.type === appActions.SET_USER_TOKEN) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({
  expiresIn,
  userToken
})

export default persistReducer(persistConfig, rootReducer)
