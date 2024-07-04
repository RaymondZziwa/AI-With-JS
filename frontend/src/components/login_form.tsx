import { Input } from '@material-tailwind/react'
import React from 'react'

interface LoginFormProps {
    setUsername: (input: string) => void;
    setPassword: (input: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {


    return (
            <form className=' bg-white p-8 rounded-xl'>
                <h2 className='text-center pb-5 text-2xl text-primary'>Log In</h2>
                <div className='mb-2'>
                    <Input type='text' label='username' onChange={props.setUsername} crossOrigin={undefined}  />
                </div>
                <div className='relative first-letter:mb-2'>
                    <Input type='password' label='Password' onChange={props.setPassword} crossOrigin={undefined}  />
                </div>
                {/* <div className='mb-1'>
                    <p className='text-right text-sm text-primary cursor-pointer italic' onClick={()=>setIsPasswordForgotten(true)}>Forgot password?</p>
                </div> */}
                <p className='text-center text-sm text-primary cursor-pointer'>Login with Face ID</p>
            </form>
    )
}

export default LoginForm