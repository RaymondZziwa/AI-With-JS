import { useState } from 'react'
import './App.css'
import AuthView from './components/auth_view'
import LoginForm from './components/login_form'
import RegisterForm from './components/sign_up_form'

function App() {
  const [formId, setFormId] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [isRegistered, setIsRegistered] = useState(true)

  const registrationStateHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIsRegistered(prevState => !prevState)
}

  const loginHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const registerHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const setUsernameHandler = (input: string) => {
    setUsername(input)
  }

  const setPasswordHandler = (input: string) => {
    setPassword(input)
  }

  const setImageHandler = (input: any) => {
    setPassword(input)
  }

  return (
    <div className='h-screen flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
        <AuthView formId={formId} form={isRegistered ? <LoginForm setUsername={setUsernameHandler} setPassword={setPasswordHandler} />: <RegisterForm setUsername={setUsernameHandler} setPassword={setPasswordHandler} setImage={setImageHandler} />} />
        <div className="mt-2 ">
          <p className='text-center text-sm text-primary cursor-pointer' onClick={(event) => registrationStateHandler(event)}>{isRegistered ? 'Sign In' : 'Create Account'}</p>
        </div>
      </div>
    </div>  
  )
}

export default App
