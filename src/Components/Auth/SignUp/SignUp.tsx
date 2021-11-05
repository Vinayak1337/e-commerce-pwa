import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signUpStart } from '../../../Redux/User/User.Actions';
import Button from '../../Button/Button';
import FormInput from '../FormInput/FormInput';
import { SignUpContainer, SignUpTitle } from './SignUp.styled';

const SignUp: FC<SignUpProps> = ({ emailSignUpStart }) => {
	const [state, setState] = useState<SignUpState>({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = state;

		if (password !== confirmPassword) return alert('Passwords do not match');

		emailSignUpStart({ displayName, email, password });
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setState(prevState => ({ ...prevState, [name]: value }));
	};

	return (
		<SignUpContainer>
			<SignUpTitle>Don't have an account?</SignUpTitle>
			<span>Sign up now</span>
			<form onSubmit={handleSubmit} className='sign-up-form'>
				<FormInput
					id='text'
					type='text'
					name='displayName'
					value={state.displayName}
					label='display name'
					handleChange={handleChange}
					required
				/>
				<FormInput
					id='email'
					type='email'
					name='email'
					value={state.email}
					label='email'
					handleChange={handleChange}
					required
				/>
				<FormInput
					id='password'
					type='password'
					name='password'
					value={state.password}
					label='password'
					handleChange={handleChange}
					required
				/>
				<FormInput
					id='confirmPassword'
					type='password'
					name='confirmPassword'
					value={state.confirmPassword}
					label='confirm password'
					handleChange={handleChange}
					required
				/>

				<Button type='submit'>SIGN UP</Button>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	emailSignUpStart: (credentials: SignUpCredentials) =>
		dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);

interface SignUpState {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: SignUpState['password'];
}

interface SignUpProps {
	emailSignUpStart: (credentials: SignUpCredentials) => void;
}
