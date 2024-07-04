import { ReactNode, useState } from "react";
import { Button } from '@material-tailwind/react'

interface AuthViewProps {
    formId: string;
    form: ReactNode;
    login: (event: React.MouseEvent<HTMLElement>) => void;
    register: (event: React.MouseEvent<HTMLElement>) => void;
}
const AuthView: React.FC<AuthViewProps> = (props) => {

    return (
        <div className="auth-view">
            {props.form}
            <div className="auth-view__buttons">
                <Button className='w-full text-center bg-primary font-bold' onClick={props.formId == 'login' ? props.login : props.register} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{props.formId == 'login' ? 'LOGIN': 'REGISTER'}</Button>
            </div>
        </div>
    )
}
export default AuthView