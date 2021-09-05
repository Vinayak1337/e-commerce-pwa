import { FC } from 'react';
import { SignIn, SignUp } from '../../Components/Auth';
import './Authentication.scss';

const Authentication: FC = () => {
	return (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Authentication;
