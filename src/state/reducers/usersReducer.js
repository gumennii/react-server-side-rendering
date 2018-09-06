import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions'

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        users: action.payload.data,
        isFetched: false
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        list: action.payload.items,
        isFetched: true
      }
    }
    default: 
      return state
  }
}