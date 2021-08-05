/// <reference types="react-scripts" />
/// <reference types="firebase" />
/// <reference types="firestore" />

interface RootState {
    users: UserReducer;
}

interface UserSnapshot {
    id: string;
    data: () => User
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
    sections: Item[]
}

interface MenuItemProps {
    section: Item;
}

interface ShopState {
    collection: ShopDataType[];
}

interface HeaderProps {
    user: firebase.User | null;
}
interface CollectionPreviewProps {
    title: string;
    items: ShopItem[];
}

interface CollectionItemProps {
    item: ShopItem;
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
    type?: "button" | "submit" | "reset" | undefined;
    isGoogle?: boolean;
    onClick?: (event: Event<HTMLInputElement>) => void;
}

interface SignUpState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: SignUpState.password;
}

interface Item {
    title:    string;
    imageUrl: string;
    id:       number;
    linkUrl:  string;
    size?:    string;
}

interface ShopDataType {
    id:        number;
    title:     string;
    routeName: string;
    items:     ShopItem[];
}

interface ShopItem {
    id:       number;
    name:     string;
    imageUrl: string;
    price:    number;
}
