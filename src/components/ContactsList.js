import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactsList extends Component {
  state = {
    query: '',
  }

  // change handler for controlled input used to search for a user by name of twitter handle
  updateSearchQuery = ({ value }) => {
    this.setState({
      query: value,
    })
  }

  render() {
    const { query } = this.state
    const { contacts, removeHandler } = this.props

    const filteredContacts =
      query === ''
        ? contacts
        : contacts.filter(
            contact =>
              contact.name.toLowerCase().includes(query.toLowerCase) ||
              contact.handle.toLowerCase().includes(query.toLowerCase()),
          )

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={event => this.updateSearchQuery(event.target)}
          />
        </div>

        <ol className='contact-list'>
          {filteredContacts.map(contact => (
            <li key={contact.id} className='contact-list-item'>
              <div
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
                className='contact-avatar'
              ></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{`@ ${contact.handle}`}</p>
              </div>
              <button
                className='contact-remove'
                onClick={() => removeHandler(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
    }),
  ),
  removeHandler: PropTypes.func.isRequired,
}

export default ContactsList
