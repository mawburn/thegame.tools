import React from 'react'
import { NavBar } from './'

export default {
  component: NavBar,
}

const links = [
  {
    url: '/',
    render: 'Home',
  },
  {
    url: '/next',
    render: 'Next Page',
  },
  {
    url: '/another',
    render: 'Another Page',
  },
]

export const Basic = () => (
  <div className="border border-black">
    <NavBar links={links} />
  </div>
)
