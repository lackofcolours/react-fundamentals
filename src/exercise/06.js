// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInput = React.useRef(null) // This React hook!! null is the initial value
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    // console.dir(userNameInput.current.value) // useful for debugging DOM node
    onSubmitUsername(userNameInput.current.value)
  }

  const handleValidation = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    handleError(isValid)

    // Alternative method according to video
    // This does not require separate error function
    // const value = userNameInput.current.value
    // const isLowerCase = value === value.toLowerCase()
    // setError(isLowerCase ? null : 'Username must be lower case')
  }

  const handleError = isValid =>
    setError(isValid ? null : 'Username must be lower case')

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          ref={userNameInput}
          id="userNameInput"
          name="username"
          type="text"
          onChange={handleValidation}
        />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
