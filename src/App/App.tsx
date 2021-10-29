import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUser } from '../Firebase/firebase.utils';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setUser } from '../Redux/User/UserActions';
import { Header } from '../Components/Header';
import {
	Authentication,
	Checkout,
	ErrorPage,
	LandingPage,
	Shop
} from '../Pages';

class App extends Component<AppProps> {
	unsubscribeFromAuth: firebase.Unsubscribe | Function = () => {};

	componentDidMount() {
		const { setUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (!userAuth) return setUser(userAuth);
			const userRef = await createUser(userAuth);

			if (!userRef) return;
			userRef.onSnapshot(snapshot => {
				const user = { id: snapshot.id, ...snapshot.data() } as User;
				return setUser(user);
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/shop' component={Shop} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.user ? <Redirect to='/' /> : <Authentication />
						}
					/>
					<Route
						exact
						path='/checkout'
						render={() =>
							!this.props.user ? <Redirect to='/signin' /> : <Checkout />
						}
					/>
					<Route component={ErrorPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	user: state.userReducer.user,
	sections: state.shopReducer.sections,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setUser: (user: any) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

interface AppProps {
	user: null | User;
	sections: Section[];
	setUser: (user: User | null) => void;
}
