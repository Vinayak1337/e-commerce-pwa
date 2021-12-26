import styled from 'styled-components';

export const MenuItemBGImage = styled.div<{ imageUrl: string }>`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const MenuItemContent = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`;

export const MenuItemContainer = styled.div<{ size: string | undefined }>`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& ${MenuItemBGImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${MenuItemContent} {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	${({ size }) => (size ? `height: 380px;` : '')}
`;

export const MenuItemTitle = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const MenuItemSubTitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
