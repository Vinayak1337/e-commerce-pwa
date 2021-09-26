import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: black;
`;

export const ErrorPageText = styled.p`font-weight: 600;`;

export const ErrorPageSpan = styled.span`
	content: '';
	border-right: 1px solid black;
	padding: 0.5em 0px;
	margin: 0px 10px;
`;
