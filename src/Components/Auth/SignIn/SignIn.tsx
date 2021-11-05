import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
	emailSignInStart,
	googleSignInStart
} from '../../../Redux/User/User.Actions';
import Button from '../../Button/Button';
import FormInput from '../FormInput/FormInput';
import {
	SignInButtonsContainer,
	SignInContainer,
	SignInTitle
} from './SignIn.styled';

const SignIn: FC<SignInProps> = ({ googleSignInStart, emailSignInStart }) => {
	const [state, setState] = useState<SignInState>({
		email: '',
		password: ''
	});

	const changeState = (newState: Partial<SignInState>) =>
		setState(prevState => ({ ...prevState, ...newState }));

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, password } = state;

		emailSignInStart({ email, password });
		changeState({ email: '', password: '' });
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		changeState({ [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>Already have an account ?</SignInTitle>
			<span>Sign in now</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					id='emai-signIn'
					label='email'
					value={state.email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					id='password-signIn'
					label='password'
					value={state.password}
					handleChange={handleChange}
					required
				/>

				<SignInButtonsContainer>
					<Button type='submit'> Sign In </Button>
					<Button onClick={googleSignInStart} isGoogle type='button'>
						{' '}
						Sign In with Google{' '}
					</Button>
				</SignInButtonsContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (credentials: Credentials) =>
		dispatch(emailSignInStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignIn);

interface SignInState {
	email: string;
	password: string;
}

interface SignInProps {
	googleSignInStart: () => void;
	emailSignInStart: (credentials: Credentials) => void;
}
