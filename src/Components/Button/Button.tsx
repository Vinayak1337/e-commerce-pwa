import { FC } from 'react';
import './Button.scss';

const Button: FC<ButtonProps> = ({ children, isGoogle, ...other }) => {
	return (
		<button className={`${isGoogle ? 'google' : ''} button`} {...other}>
			{children}
		</button>
	);
};

export default Button;
