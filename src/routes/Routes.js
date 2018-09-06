import React from 'react'
import universal from 'react-universal-component'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Loading from '../pages/Loading'

import { fetchInitialData } from '../state/actions'

const Sample = universal(() => import('../pages/Sample'), {
  minDelay: 200,
  loading: Loading,
  error: NotFound
})

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sample',
    exact: true,
    component: Sample,
    getInitialData: store => store.dispatch(fetchInitialData())
  }
]