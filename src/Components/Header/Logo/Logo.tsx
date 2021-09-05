import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo: FC<LogoProps> = ({
	linkTo,
	Icon,
	label,
	itemCount,
	isOption,
	handleClick
}) => {
	return (
		<Link to={linkTo} onClick={handleClick}>
			<div className={`logo ${isOption ? 'option' : ''}`}>
				<Icon className="logo-icon" />
				{itemCount !== null
					? <span className="logo-count">
							{itemCount}
						</span>
					: ''}
				<p>
					{label}
				</p>
			</div>
		</Link>
	);
};

export default Logo;
