import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getLogoIcon, LogoContainer, LogoTextParagraph } from './Logo.styled';

const Logo: FC<LogoProps> = ({ linkTo, Icon, label, handleClick }) => {
	const LogoComponent = getLogoIcon(Icon);
	return (
		<Link to={linkTo} onClick={handleClick}>
			<LogoContainer>
				<LogoComponent />
				<LogoTextParagraph>
					{label}
				</LogoTextParagraph>
			</LogoContainer>
		</Link>
	);
};

export default Logo;
