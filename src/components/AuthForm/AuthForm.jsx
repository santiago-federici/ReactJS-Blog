import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

import './AuthForm.css'

export function AuthForm () {
  const [isLoginSelected, setIsLoginSelected] = useState(true)

  const handleChange = () => {
    setIsLoginSelected(!isLoginSelected)
  }

  return (
    <main className='user-account'>
      <form className='data-container'>

        <label className='switch' onChange={handleChange}>
          <input type='checkbox' />
          <span className='slider'></span>
        </label>

        {
          isLoginSelected
            ? <LoginForm />
            : <RegisterForm />
        }

      </form>
    </main>
  )
}
