import { FC } from 'react';
import {
	ErrorPageContainer,
	ErrorPageSpan,
	ErrorPageText
} from './ErrorPage.styled';

const ErrorPage: FC = () => {
	return (
		<ErrorPageContainer>
			<ErrorPageText>
				404<ErrorPageSpan />Page Not Found
			</ErrorPageText>
		</ErrorPageContainer>
	);
};

export default ErrorPage;
