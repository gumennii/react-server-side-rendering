import axios from 'axios'

// // Example
// export const fetchInitialData = () => dispatch => {
//   // return fetch('https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories')
//   return fetch('http://localhost:3000/json')
//     .then(res => res.json())
//     .then(data => dispatch(fetchSuccess(data)))
//     .catch(err => dispatch(fetchFailure(err)))
// }

export const FETCH_USERS_REQUEST = 'fetchUsersRequest'
export const FETCH_USERS_SUCCESS = 'fetchUsersSuccess'
export const FETCH_USERS_FAILURE = 'fetchUsersFailure'
export const FETCH_USERS = 'fetchUsers'

export const fetchUsersRequest = response => ({
  type: FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = response => ({
  type: FETCH_USERS_SUCCESS,
  payload: response
})

export const fetchUsersFailure = error => ({
  type: FETCH_FAILURE,
  payload: error
})

export const fetchUsers = () => async dispatch => {
  console.log('fetching users')
  // with a dispatch we can pass some global defined API
  // dispatch(fetchUsersRequest())

  try {
    const response = await axios.get('http://react-ssr-api.herokuapp.com/users')
    console.log(response)
    dispatch(fetchUsersSuccess(response))
  } catch (err) {
    dispatch(fetchUsersFailure(err))
  }
}