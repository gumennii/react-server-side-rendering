import { createStore, applyMiddleware, compose } from "redux"
import { fetchInitialData } from "./reducers"
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export default initialState => {
  const store = createStore(fetchInitialData, initialState, enhancer)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').fetchInitialData)
    )
  }

  return store
}