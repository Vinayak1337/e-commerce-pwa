import styled, { css } from 'styled-components';

const centerIt = css`
	justify-content: center;
	align-items: center;
`;

export const CollectionOverviewContainer = styled.div<{ hasSpinner?: string }>`
	display: flex;
	flex-direction: column;

	${({ hasSpinner }) => (hasSpinner ? centerIt : '')}
`;

export const LoadingContainer = styled.div`
	height: 80vh;
	width: 100vw;
	cursor: wait;
	display: grid;
	place-items: center;
	font-weight: 600;
`;
