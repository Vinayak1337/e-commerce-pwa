import { FC } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

const Directory: FC<DirectoryProps> = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map(section => {
				return <MenuItem key={section.id} section={section} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	sections: state.shopReducer.sections
});

export default connect(mapStateToProps)(Directory);
