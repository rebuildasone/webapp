import * as appActions from './actions'

export const setUserToken = token => {
  return {
    type: appActions.SET_USER_TOKEN,
    payload: token
  }
}
