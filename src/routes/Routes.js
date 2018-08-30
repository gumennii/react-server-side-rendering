import React from 'react'
import universal from 'react-universal-component'

import Home from '../pages/Home'
// import Sample from '../pages/Sample'

const Sample = universal(() => import('../pages/Sample'), {
  minDelay: 1200
});

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sample',
    exact: true,
    component: Sample
  }
]