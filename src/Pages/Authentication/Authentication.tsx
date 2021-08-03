import { FC } from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import './Authentication.scss'

const Authentication: FC = () => {
    return (
        <div className="auth">
            <SignIn />
        </div>
    )
}

export default Authentication
