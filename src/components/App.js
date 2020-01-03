import React from 'react'
import { hot } from 'react-hot-loader'

// const contacts = [
//   {
//     "id": "karen",
//     "name": "Karen Isgrigg",
//     "handle": "karen_isgrigg",
//     "avatarURL": "http://localhost:5001/karen.jpg"
//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "richardkalehoff",
//     "avatarURL": "http://localhost:5001/richard.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "tylermcginnis",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
//  ];

const App = () => (
  <h1
    style={{
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontStyle: 'italic',
    }}
  >
    Contacts App
  </h1>
)

export default hot(module)(App)
