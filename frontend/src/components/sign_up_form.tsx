import { Input } from '@material-tailwind/react'
import React from 'react'

interface RegisterProps {
    setUsername: (input: string) => void;
    setPassword: (input: string) => void;
    setImage: (input: any) => void;
}

const RegisterForm: React.FC<RegisterProps> = (props) => {
    return (
            <form className=' bg-white p-8 rounded-xl'>
                <h2 className='text-center pb-5 text-2xl text-primary'>Register</h2>
                <div className='mb-2'>
                    <Input type='text' label='username' onChange={(event) => props.setUsernameHandler(event.target.value)} crossOrigin={undefined}  />
                </div>
                <div className='relative first-letter:mb-2'>
                    <Input type='password' label='Password' onChange={(event) => props.setPasswordHandler(event.target.value)} crossOrigin={undefined}  />
                </div>
                <div className='relative first-letter:mb-2 mt-4'>
                    <Input type='file' label='Face Image' onChange={(event) => props.setImageHandler(event)} crossOrigin={undefined}  />
                </div>
            </form>
    )
}

export default RegisterForm