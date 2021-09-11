import { FC } from 'react';
import './Button.scss';

const Button: FC<ButtonProps> = ({
	children,
	isInverted,
	isGoogle,
	...other
}) => {
	return (
		<button
			className={`${isGoogle ? 'google' : ''} ${isInverted
				? 'inverted'
				: ''} custom-button`}
			{...other}>
			{children}
		</button>
	);
};

export default Button;
