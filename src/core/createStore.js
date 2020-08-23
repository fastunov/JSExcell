export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  let listeners = []

  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        unsubscribe() {
          listeners = listeners.filter( arg => arg !== fn)
        }
      }
    },
    getstate() {
      return state
    },
    dispatch( action) {
      state = rootReducer(state, action)
      listeners.forEach(arg => arg(state))
    }
  }
}
