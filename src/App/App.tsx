import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
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
	Shop,
} from '../Pages';

class App extends Component<AppProps> {
	unsubscribeFromAuth: firebase.Unsubscribe | Function = () => {};

	componentDidMount() {
		const setCurrentUser = this.props.setUser;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (!userAuth) return setCurrentUser(userAuth);
			const userRef = await createUser(userAuth);

			if (!userRef) return;
			userRef.onSnapshot(snapshot => {
				const user = { id: snapshot.id, ...snapshot.data() } as User;
				return setCurrentUser(user);
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/shop" component={Shop} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.user ? <Redirect to="/" /> : <Authentication />)}
					/>
					<Route exact path="/checkout" component={Checkout} />
					<Route component={ErrorPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setUser: (user: any) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
