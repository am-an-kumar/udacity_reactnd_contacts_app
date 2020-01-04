import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContactsList from './ContactsList'
import * as ContactsAPI from '../utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({
        contacts,
      })
    })
  }

  removeContact = contactToRemove => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(
        contact => contact.id !== contactToRemove.id,
      ),
    }))
  }

  render() {
    return (
      <ContactsList
        contacts={this.state.contacts}
        removeHandler={this.removeContact}
      />
    )
  }
}

export default hot(module)(App)
