import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { hasSession } from '../Redux/User/User.Actions';
import { Header } from '../Components/Header';
import {
	Authentication,
	Checkout,
	ErrorPage,
	LandingPage,
	Shop
} from '../Pages';

class App extends Component<AppProps> {
	componentDidMount() {
		this.props.hasSession();
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
	sections: state.shopReducer.sections
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	hasSession: () => dispatch(hasSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

interface AppProps {
	user: null | User;
	sections: Section[];
	hasSession: () => void;
}
