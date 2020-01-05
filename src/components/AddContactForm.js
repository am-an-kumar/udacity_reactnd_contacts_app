import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class AddContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const formData = serializeForm(event.target, { hash: true })

    if (this.props.onAddContact) {
      this.props.onAddContact(formData)
    }
  }

  render() {
    return (
      <div>
        <Link className='close-create-contact' to='/'>
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' required />
            <input
              type='text'
              name='handle'
              placeholder='Twitter Handle'
              required
            />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

AddContactForm.propTypes = {
  onAddContact: PropTypes.func,
}

export default AddContactForm
