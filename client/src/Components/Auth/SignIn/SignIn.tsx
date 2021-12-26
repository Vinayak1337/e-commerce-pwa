import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
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

const SignIn: FC = () => {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

	const dispatch = useDispatch();

	const { email, password } = state;

	const changeState = (newState: Partial<typeof state>) =>
		setState(prevState => ({ ...prevState, ...newState }));

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(emailSignInStart({ email, password }));
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
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					id='password-signIn'
					label='password'
					value={password}
					handleChange={handleChange}
					required
				/>

				<SignInButtonsContainer>
					<Button type='submit'> Sign In </Button>
					<Button onClick={() => dispatch(googleSignInStart())} isGoogle type='button'>
						{' '}
						Sign In with Google{' '}
					</Button>
				</SignInButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
