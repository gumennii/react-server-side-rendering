import React from 'react'
import Home from '../pages/Home'
import Sample from '../pages/Sample'

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