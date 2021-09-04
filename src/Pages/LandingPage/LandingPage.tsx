import { FC } from 'react';
import Directory from '../../Components/Directory/Directory';
import './LandingPage.scss';

const LandingPage: FC = () => {
	return (
		<div className="landing-page">
			<Directory />
		</div>
	);
};

export default LandingPage;
