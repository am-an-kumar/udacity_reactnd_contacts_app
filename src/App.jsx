import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

// this component and its children will be hot module replaced instead of a full page refresh
export default hot(module)(App)
