import fetch from 'cross-fetch'

// Example
export const fetchInitialData = () => dispatch => {
  // return fetch('https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories')
  return fetch('http://localhost:3000/json')
    .then(res => res.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(err => dispatch(fetchFailure(err)))
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccess = response => ({
  type: FETCH_SUCCESS,
  payload: response
})

export const FETCH_FAILURE = 'FETCH_FAILURE'
export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error
})