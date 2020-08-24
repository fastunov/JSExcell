export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  let listeners = []

  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        unsubscribe() {
          listeners = listeners.filter( l => l !== fn)
        }
      }
    },
    getState() {
      return state
    },
    dispatch( action) {
      state = rootReducer(state, action)
      listeners.forEach(listener => listener(state))
    }
  }
}