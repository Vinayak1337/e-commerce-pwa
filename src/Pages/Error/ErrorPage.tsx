import { FC } from 'react';
import './ErrorPage.scss';

const ErrorPage: FC = () => {
	return (
		<div className="error-page">
			<p>
				404<span />Page Not Found
			</p>
		</div>
	);
};

export default ErrorPage;
