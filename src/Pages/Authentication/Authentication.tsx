import { FC } from 'react';
import { SignIn, SignUp } from '../../Components/Auth';
import './Authentication.scss';

const Authentication: FC = () => {
	return (
		<div className="auth">
			<div className="forms">
				<SignIn />
				<SignUp />
			</div>
			<p>Note: You can create a fake user.</p>
		</div>
	);
};

export default Authentication;
