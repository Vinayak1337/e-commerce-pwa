/// <reference types="react-scripts" />
/// <reference types="firebase" />
/// <reference types="firestore" />

interface RootState {
	userReducer: UserReducer;
	cartReducer: CartReducer;
	shopReducer: ShopReducer;
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

interface DirectoryProps {
	sections: Section[];
}

interface MenuItemProps {
	section: Section;
}

interface ShopProps {}

interface CollectionOverviewProps {
	collections: Collection[];
}

interface HeaderProps {
	user: firebase.User | null;
	cartItems: CartItem[];
	dropdownHidden: boolean;
	toggleDropdown: () => void;
}
interface CollectionPreviewProps {
	title: string;
	items: Item[];
}

interface CollectionItemProps {
	item: Item;
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

interface LogoProps {
	linkTo: string;
	Icon: ReactComponent;
	label: string;
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
		}
	| {
			type: 'clear_cart';
		};

interface UserReducerActions {
	type: 'set_user';
	payload: User | null;
}

interface CartReducer {
	dropdownHidden: boolean;
	cartItems: CartItem[];
}

type CartItem = Item & {
	quantity: number;
};

interface CartItemProps {
	item: CartItem;
}

interface CartDropdownProps {
	items: CartItem[];
	toggleDropdown: () => void;
}

interface CheckoutProps {
	cartItems: CartItem[];
}

interface CheckoutItemProps {
	item: CartItem;
	removeCartItem: (item: CartItem) => void;
	addCartItem: (item: CartItem) => void;
}

interface ShopReducer {
	sections: Section[];
	collections: Collection[];
}

interface Section {
	title: string;
	imageUrl: string;
	size?: string;
	id: string;
	linkUrl: string;
}

interface Collection {
	id: string;
	title: string;
	routeName: string;
	items: Item[];
}

interface Item {
	id: string;
	name: string;
	imageUrl: string;
	price: number;
}

interface CollectionProps {
	collection: Collection | null;
}

interface StripeButtonProps {
	price: number;
	clearCart: () => void;
}
