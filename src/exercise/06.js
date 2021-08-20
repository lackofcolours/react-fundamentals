// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInput = React.useRef(null) // This React hook!! null is the initial value

  const handleSubmit = event => {
    event.preventDefault()
    // console.dir(userNameInput.current.value) // useful for debugging DOM node
    onSubmitUsername(userNameInput.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          ref={userNameInput}
          id="userNameInput"
          name="username"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
