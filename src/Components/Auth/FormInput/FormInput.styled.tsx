import styled, { css } from 'styled-components';

const sub_color = 'grey',
	main_color = 'black';

const shrinkStyle = css`
	top: -14px;
	font-size: 12px;
	color: ${main_color};
`;

export const FormInputGroup = styled.div`
	position: relative;
	margin: 45px 0;
`;

type IsShrink = {
	shrink: boolean | undefined;
};

export const FormInputLabel = styled.label<IsShrink>`
	color: ${sub_color};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	${({ shrink }) => (shrink ? shrinkStyle : '')}
`;

export const FormInputMain = styled.input`
	background: none;
	background-color: white;
	color: $sub-color;
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${sub_color};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkStyle}
	}

	${({ type }) => (type === 'password' ? 'letter-spacing: 0.3em' : '')}
`;
