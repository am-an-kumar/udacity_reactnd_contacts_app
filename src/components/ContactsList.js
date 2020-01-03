import React from 'react'
import PropTypes from 'prop-types'

const ContactsList = ({ contacts, removeHandler }) => {
  return (
    <ol className='contact-list'>
      {contacts.map(contact => (
        <li key={contact.id} className='contact-list-item'>
          <div
            style={{
              backgroundImage: `url(${contact.avatarURL})`,
            }}
            className='contact-avatar'
          ></div>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.avatarURL}</p>
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
  )
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
