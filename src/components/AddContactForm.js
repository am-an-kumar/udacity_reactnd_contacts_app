import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
import { validateName, validateHandle } from '../utils/formValidate'

class AddContactForm extends Component {
  state = {
    name: '',
    handle: '',
    nameErrorMessage: '',
    handleErrorMessage: '',
  }

  handleSubmit = event => {
    event.preventDefault()

    // checking name and handle for error
    const { name, handle } = this.state
    const nameErrorMessage = validateName(name)
    const handleErrorMessage = validateHandle(handle, this.props.contacts)

    if (nameErrorMessage || handleErrorMessage) {
      // setting the error message and triming name and handle
      this.setState({
        name: name.trim(),
        handle: handle.trim(),
        nameErrorMessage,
        handleErrorMessage,
      })
    }
    // form can be sent to server
    else {
      // serializing form data to send using POST
      const formData = serializeForm(event.target, { hash: true })
      if (this.props.onAddContact) {
        this.props.onAddContact(formData)
      }
    }
  }

  // common handler for all text input
  onChangeHandler = event => {
    // name here refers to the "name" attribute of input
    const { name, value } = event.target
    this.setState({
      [name]: value,
      [name + 'ErrorMessage']: '',
    })
  }

  render() {
    const { name, handle, nameErrorMessage, handleErrorMessage } = this.state

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
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={this.onChangeHandler}
            />
            {nameErrorMessage && <span>{nameErrorMessage}</span>}
            <input
              type='text'
              name='handle'
              placeholder='Twitter Handle'
              value={handle}
              onChange={this.onChangeHandler}
            />
            {handleErrorMessage && <span>{handleErrorMessage}</span>}
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

AddContactForm.propTypes = {
  onAddContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default AddContactForm
