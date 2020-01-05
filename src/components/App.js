import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Redirect, Switch } from 'react-router-dom'
import { toast } from 'react-toastify'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'
import * as ContactsAPI from '../utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    // fetching all contacts from server, the filtering is done on client side
    ContactsAPI.getAll().then(contacts => {
      this.setState({
        contacts,
      })
    })
  }

  addContact = formData => {
    ContactsAPI.create(formData).then(contact => {
      this.setState(currentState => ({
        contacts: currentState.contacts.concat([contact]),
      }))
    })
  }

  removeContact = contactToRemove => {
    // removing contact from UI state
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(
        contact => contact.id !== contactToRemove.id,
      ),
    }))

    // making DELETE request to remove contact from server
    ContactsAPI.remove(contactToRemove)
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return (
              <ContactsList
                contacts={this.state.contacts}
                removeHandler={this.removeContact}
              />
            )
          }}
        />
        <Route
          path='/create'
          render={({ history }) => (
            <AddContactForm
              onAddContact={contact => {
                this.addContact(contact)
                // redirects to contact list page after a new contact is added
                history.push('/')
                // notifying user
                toast.success('Contact Added', {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  delay: 400,
                  autoClose: 3000,
                })
              }}
            />
          )}
        />
        <Redirect to='/create' />
      </Switch>
    )
  }
}

export default hot(module)(App)
