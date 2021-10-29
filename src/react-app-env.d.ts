/// <reference types="react-scripts" />

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

interface User {
	id: string;
	displayName: string;
	email: string;
}

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	isGoogle?: boolean;
	isInverted?: boolean;
	onClick?: (event: Event<HTMLInputElement>) => void;
}

interface CartReducer {
	dropdownHidden: boolean;
	cartItems: CartItem[];
}

type CartItem = Item & {
	quantity: number;
};

interface ShopReducer {
	sections: Section[];
	collections: null | Collections;
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

interface Collections {
	[x: string]: {
		routeName: string;
		title: string;
		items: Item[];
		id: string;
	};
}
