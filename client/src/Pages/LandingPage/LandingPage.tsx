import { FC } from 'react';
import { Directory } from '../../Components/LandingPage';
import { HomePageContainer } from './LadingPage.styled';

const LandingPage: FC = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default LandingPage;
