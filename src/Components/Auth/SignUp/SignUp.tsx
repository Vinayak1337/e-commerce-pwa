import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../../Redux/User/User.Actions';
import Button from '../../Button/Button';
import FormInput from '../FormInput/FormInput';
import { SignUpContainer, SignUpTitle } from './SignUp.styled';

const SignUp: FC = () => {
	const [state, setState] = useState<SignUpState>({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const dispatch = useDispatch();

	const { displayName, email, password, confirmPassword } = state;

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) return alert('Passwords do not match');

		dispatch(signUpStart({ displayName, email, password }));
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
					value={displayName}
					label='display name'
					handleChange={handleChange}
					required
				/>
				<FormInput
					id='email'
					type='email'
					name='email'
					value={email}
					label='email'
					handleChange={handleChange}
					required
				/>
				<FormInput
					id='password'
					type='password'
					name='password'
					value={password}
					label='password'
					handleChange={handleChange}
					required
				/>
				<FormInput
					id='confirmPassword'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					label='confirm password'
					handleChange={handleChange}
					required
				/>

				<Button type='submit'>SIGN UP</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;

interface SignUpState {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: SignUpState['password'];
}
