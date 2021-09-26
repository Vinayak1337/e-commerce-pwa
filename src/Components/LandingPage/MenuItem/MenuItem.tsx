import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
	MenuItemBGImage,
	MenuItemContainer,
	MenuItemContent,
	MenuItemSubTitle,
	MenuItemTitle
} from './MenuItem.styled';

const MenuItem: FC<MenuItemProps & RouteComponentProps> = ({
	section,
	history,
	match
}) => {
	const { title, imageUrl, size, linkUrl } = section;

	return (
		<MenuItemContainer
			size={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<MenuItemBGImage imageUrl={imageUrl} />
			<MenuItemContent>
				<MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
				<MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
			</MenuItemContent>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);

interface MenuItemProps {
	section: Section;
}
