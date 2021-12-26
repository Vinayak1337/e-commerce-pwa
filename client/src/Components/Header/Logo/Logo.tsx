import { FC, FunctionComponent, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, LogoContainer, LogoTextParagraph } from './Logo.styled';

const Logo: FC<LogoProps> = ({ linkTo, Icon, label, handleClick }) => {
	return (
		<Link to={linkTo} onClick={handleClick}>
			<LogoContainer>
				<LogoIcon as={Icon} />
				<LogoTextParagraph>{label}</LogoTextParagraph>
			</LogoContainer>
		</Link>
	);
};

export default Logo;

interface LogoProps {
	linkTo: string;
	Icon: FunctionComponent<
		SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
	label: string;
	handleClick?: () => void;
}
