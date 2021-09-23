import { ChangeEvent, Component, FormEvent } from 'react';
import { auth, createUser } from '../../../Firebase/firebase.utils';
import Button from '../../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUp.scss';

export default class SignUp extends Component {
	state: SignUpState;

	constructor(props: {} | Readonly<{}>) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUser(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>Don't have an account?</h2>
				<span>Sign up now</span>
				<form onSubmit={this.handleSubmit} className='sign-up-form'>
					<FormInput
						id='text'
						type='text'
						name='displayName'
						value={this.state.displayName}
						label='display name'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						id='email'
						type='email'
						name='email'
						value={this.state.email}
						label='email'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						id='password'
						type='password'
						name='password'
						value={this.state.password}
						label='password'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						id='confirmPassword'
						type='password'
						name='confirmPassword'
						value={this.state.confirmPassword}
						label='confirm password'
						handleChange={this.handleChange}
						required
					/>

					<Button type='submit'>SIGN UP</Button>
				</form>
			</div>
		);
	}
}
