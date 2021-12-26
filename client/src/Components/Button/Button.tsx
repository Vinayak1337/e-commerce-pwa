import { FC } from 'react';
import { StyledButton } from './Button.styled';

const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
	return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
