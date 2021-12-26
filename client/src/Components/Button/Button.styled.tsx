import styled, { css } from 'styled-components';

const defaultStyles = css`
	background-color: black;
	color: white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const getButtonStyles = (props: ButtonProps) => {
	if (props.isGoogle) return googleSignInStyles;
	else if (props.isInverted) return invertedButtonStyles;
	return defaultStyles;
};

export const StyledButton = styled.button`
	min-width: 130px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;
	border: none;

	${getButtonStyles}
`;
