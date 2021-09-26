import { FC } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import { DirectoryContainer } from './Directory.styled';

const Directory: FC<DirectoryProps> = ({ sections }) => {
	return (
		<DirectoryContainer>
			{sections.map(section => {
				return <MenuItem key={section.id} section={section} />;
			})}
		</DirectoryContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	sections: state.shopReducer.sections
});

export default connect(mapStateToProps)(Directory);

interface DirectoryProps {
	sections: Section[];
}
