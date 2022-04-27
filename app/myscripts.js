console.log("hello");

const systemName      = "youandme"
const systemPassword  = "123"

const loginForm         = document.querySelector(".login-form") // the div
const bodyContent       = document.querySelector(".body-content") // the div
const userInputName     = document.getElementById('username')
// const newUserInputName  = toLowerCase(userInputName.trim())
const userInputPassword = document.getElementById('password')
const form              = document.getElementById('form')       // the form itself
const errorElement      = document.getElementById('error')


// FORM START
form.addEventListener('submit', (e) => {
  let messages = []

  if (userInputName.value !== systemName) {
    messages.push('*Wrong Username*')
  } else if (userInputPassword.value !== systemPassword) {
    messages.push('*Wrong Password*')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
// FORM END
