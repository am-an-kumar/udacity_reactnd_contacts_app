import React from 'react'
import PropTypes from 'prop-types'

const ContactsList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
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
}

export default ContactsList
