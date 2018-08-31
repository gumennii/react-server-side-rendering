import {
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './actions'

export const fetchInitialData = (state = {}, action) => {
  switch(action.type) {
    case FETCH_SUCCESS: {
      action.payload.test = 'Boom'
      return {
        ...state,
        data: action.payload
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: 
      return state
  }
}