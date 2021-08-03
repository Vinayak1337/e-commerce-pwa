import { FC } from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import './Authentication.scss'

const Authentication: FC = () => {
    return (
        <div className="auth">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication
