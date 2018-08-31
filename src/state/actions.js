import fetch from 'cross-fetch'
import axios from 'axios'

// // Example
// export const fetchInitialData = () => dispatch => {
//   // return fetch('https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories')
//   return fetch('http://localhost:3000/json')
//     .then(res => res.json())
//     .then(data => dispatch(fetchSuccess(data)))
//     .catch(err => dispatch(fetchFailure(err)))
// }

// export const FETCH_SUCCESS = 'FETCH_SUCCESS'
// export const fetchSuccess = response => ({
//   type: FETCH_SUCCESS,
//   payload: response
// })

// export const FETCH_FAILURE = 'FETCH_FAILURE'
// export const fetchFailure = error => ({
//   type: FETCH_FAILURE,
//   payload: error
// })

export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async dispatch => {
  // with a dispatch we can pass some global defined API
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users')

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}