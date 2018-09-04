import React from 'react'
import universal from 'react-universal-component'

import Home from '../pages/Home'

import { fetchData } from '../state/actions'

const Sample = universal(() => import('../pages/Sample'), {
  minDelay: 1200
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
    getInitialData: store => store.dispatch(fetchData())
  }
]