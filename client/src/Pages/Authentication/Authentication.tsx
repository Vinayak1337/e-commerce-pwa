import { FC } from 'react';
import { SignIn, SignUp } from '../../Components/Auth';
import { AuthContainer, AuthFormsContainer } from './Authentication.styled';

const Authentication: FC = () => {
	return (
		<AuthContainer>
			<AuthFormsContainer>
				<SignIn />
				<SignUp />
			</AuthFormsContainer>
			<p>Note: You can create a fake user.</p>
		</AuthContainer>
	);
};

export default Authentication;
