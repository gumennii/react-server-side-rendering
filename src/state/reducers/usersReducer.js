import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions'

const defaultState = {
  users: [],
  isFetching: false,
  isFetched: false,
  error: null
}

export default (state = defaultState, action) => {
  console.log(action.payload)
  switch(action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    }
    case FETCH_USERS_SUCCESS: {
      return { 
        ...state,
        users: action.users,
        isFetching: false,
        isFetched: true
      }
    }
    case FETCH_USERS_FAILURE: {
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