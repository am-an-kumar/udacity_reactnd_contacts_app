import React from 'react'
import { hot } from 'react-hot-loader'
import ContactsList from './ContactsList'

const contacts = [
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: 'karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg',
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: 'richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg',
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: 'tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg',
  },
]

const App = () => <ContactsList contacts={contacts} />

export default hot(module)(App)
