import { ChangeEvent, Component, FormEvent } from 'react';
import { auth, signInWithGoogle } from '../../../Firebase/firebase.utils';
import Button from '../../Button/Button';
import FormInput from '../FormInput/FormInput';
import {
	SignInButtonsContainer,
	SignInContainer,
	SignInTitle
} from './SignIn.styled';

class SignIn extends Component {
	state: SignInState;

	constructor(props: {} | Readonly<{}>) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error);
		}

		this.setState({ email: '', password: '' });
	};

	handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignInContainer>
				<SignInTitle>Already have an account ?</SignInTitle>
				<span>Sign in now</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						id='emai-signIn'
						label='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						id='password-signIn'
						label='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>

					<SignInButtonsContainer>
						<Button type='submit'> Sign In </Button>
						<Button onClick={signInWithGoogle} isGoogle type='button'>
							{' '}
							Sign In with Google{' '}
						</Button>
					</SignInButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;

interface SignInState {
	email: string;
	password: string;
}
