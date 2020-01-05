import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class AddContactForm extends Component {
  state = {
    name: '',
    handle: '',
    nameError: false,
    handleError: false,
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = serializeForm(event.target, { hash: true })

    let { name, handle } = this.state
    name = name.trim()
    handle = handle.trim()

    // check to see if name and handle are valid or not
    const nameError = name === '' ? true : false
    const handleError = handle === '' ? true : false

    if (nameError || handleError) {
      this.setState({
        name,
        handle,
        nameError,
        handleError,
      })
    } else {
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
      [name + 'Error']: false,
    })
  }

  render() {
    const { name, handle, nameError, handleError } = this.state

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
            {nameError && <span>Invalid Name</span>}
            <input
              type='text'
              name='handle'
              placeholder='Twitter Handle'
              value={handle}
              onChange={this.onChangeHandler}
            />
            {handleError && <span>Invalid Twitter Handle</span>}
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
