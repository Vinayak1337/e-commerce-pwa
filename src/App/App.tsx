import { FC, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hasSession } from '../Redux/User/User.Actions';
import { Header } from '../Components/Header';
import {
	Authentication,
	Checkout,
	ErrorPage,
	LandingPage,
	Shop
} from '../Pages';

const App: FC = () => {
	const user = useSelector((state: RootState) => state.userReducer.user);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(hasSession());
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/shop' component={Shop} />
				<Route
					exact
					path='/signin'
					render={() => (user ? <Redirect to='/' /> : <Authentication />)}
				/>
				<Route
					exact
					path='/checkout'
					render={() => (!user ? <Redirect to='/signin' /> : <Checkout />)}
				/>
				<Route component={ErrorPage} />
			</Switch>
		</div>
	);
};

export default App;
