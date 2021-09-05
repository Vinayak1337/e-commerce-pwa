import { Component } from 'react';
import { Sections } from '../../../Assets/data';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

class Directory extends Component {
	state: DirectoryState;

	constructor(props: {} | Readonly<{}>) {
		super(props);

		this.state = {
			sections: Sections
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(section => {
					return <MenuItem key={section.id} section={section} />;
				})}
			</div>
		);
	}
}

export default Directory;
