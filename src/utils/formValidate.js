// validation code for forms used throughout the application. In our case, it is used at just one place. But, this design is useful for code reuse

const MIN_NAME_LENGTH = 4
const MIN_HANDLE_LENGTH = 6

const validateName = name => {
  name = name.trim()

  return name === ''
    ? "name can't be empty"
    : name.length < MIN_NAME_LENGTH
    ? 'name must be 4 or more characters'
    : ''
}

const validateHandle = handle => {
  handle = handle.trim()

  return handle === ''
    ? "handle can't be empty"
    : handle.length < MIN_HANDLE_LENGTH
    ? 'handle must be 6 or more characters'
    : ''
}

export { validateName, validateHandle }
