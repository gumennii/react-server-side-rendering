import axios from 'axios'

// // Example
// export const fetchInitialData = () => dispatch => {
//   // return fetch('https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories')
//   return fetch('http://localhost:3000/json')
//     .then(res => res.json())
//     .then(data => dispatch(fetchSuccess(data)))
//     .catch(err => dispatch(fetchFailure(err)))
// }

export const FETCH_DATA_REQUEST = 'fetchDataRequest'
export const FETCH_DATA_SUCCESS = 'fetchDataSuccess'
export const FETCH_DATA_FAILURE = 'fetchDataFailure'
export const FETCH_DATA = 'fetchData'

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = response => ({
  type: FETCH_DATA_SUCCESS,
  payload: response
})

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error
})

export const fetchData = () => async dispatch => {
  // with a dispatch we can pass some global defined API
  dispatch(fetchDataRequest())

    return fetch('http://localhost:3000/json')
      .then(res => res.json())
      .then(data => dispatch(fetchDataSuccess(data)))
      .catch(err => dispatch(fetchDataFailure(err)))

  // try {
  //   const response = await axios.get('/json')
  //   // const response = await axios.get('http://react-ssr-api.herokuapp.com/users')
  //   const data = await response.data
  //   dispatch(fetchDataSuccess(data))
  // } catch (err) {
  //   dispatch(fetchDataFailure(err))
  // }
}