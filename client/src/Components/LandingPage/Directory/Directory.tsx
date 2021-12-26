import { FC } from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import { DirectoryContainer } from './Directory.styled';

const Directory: FC = () => {
	const sections = useSelector(
		(state: RootState) => state.shopReducer.sections
	);

	return (
		<DirectoryContainer>
			{sections.map(section => {
				return <MenuItem key={section.id} section={section} />;
			})}
		</DirectoryContainer>
	);
};

export default Directory;
