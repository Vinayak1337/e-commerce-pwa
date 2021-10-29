import { SpinnerContainer, SpinnerOverlay } from './Spinner.styled';

const Spinner = () => {
	return (
		<SpinnerContainer className='spinner'>
			<SpinnerOverlay />
		</SpinnerContainer>
	);
};

export default Spinner;
