/// <reference types="react-scripts" />
/// <reference types="firebase" />
/// <reference types="firestore" />

interface RootState {
	userReducer: UserReducer;
	cartReducer: CartReducer;
}

interface UserSnapshot {
	id: string;
	data: () => User;
}
interface UserReducer {
	user: User;
}

interface AppState {
	user: null | User;
}
interface AppProps {
	user: null | User;
	setUser: (user: User | null) => void;
}

interface User {
	id: string;
	displayName: string;
	email: string;
}

interface DirectoryState {
	sections: Item[];
}

interface MenuItemProps {
	section: Item;
}

interface ShopState {
	collection: ShopDataType[];
}

interface HeaderProps {
	user: firebase.User | null;
	cartItems: CartItem[];
	dropdownHidden: boolean;
	toggleDropdown: () => void;
}
interface CollectionPreviewProps {
	title: string;
	items: ShopItem[];
}

interface CollectionItemProps {
	item: ShopItem;
	addCartItem: (cartItem: CartItem) => void;
}

interface SignInState {
	email: string;
	password: string;
}

interface FormInputProps {
	id: string;
	name: string;
	type: string;
	value: string;
	label: string;
	required?: boolean;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	isGoogle?: boolean;
	isInverted?: boolean;
	onClick?: (event: Event<HTMLInputElement>) => void;
}

interface SignUpState {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: SignUpState.password;
}

interface Item {
	title: string;
	imageUrl: string;
	id: string;
	linkUrl: string;
	size?: string;
}

interface ShopDataType {
	id: string;
	title: string;
	routeName: string;
	items: ShopItem[];
}

interface ShopItem {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
}

interface LogoProps {
	linkTo: string;
	Icon: ReactComponent;
	label: string;
	itemCount?: number;
	isOption?: boolean;
	handleClick?: () => void;
}

interface CartLogoProps {
	itemCount: number;
	handleClick: () => void;
}

type CartReducerActions =
	| {
			type: 'set_dropdown_visibility';
		}
	| {
			type: 'add_cart_item';
			payload: CartItem;
		}
	| {
			type: 'remove_cart_item';
			payload: CartItem;
		};

interface UserReducerActions {
	type: 'set_user';
	payload: User | null;
}

interface CartReducer {
	dropdownHidden: boolean;
	cartItems: CartItem[];
}

type CartItem = ShopItem & {
	quantity: number;
};

interface CartItemProps {
	item: CartItem;
}

interface CartDropdownProps {
	items: CartItem[];
}
