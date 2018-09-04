import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions'

const defaultState = {
  users: [],
  isFetching: false,
  isFetched: false,
  error: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_DATA_REQUEST: {
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    }
    case FETCH_DATA_SUCCESS: {
      return { 
        ...state,
        users: action.payload.users,
        isFetching: false,
        isFetched: true
      }
    }
    case FETCH_DATA_FAILURE: {
      return { 
        ...state,
        error: action.error,
        isFetching: false,
        isFetched: false
      }
    }
    default: 
      return state
  }
}