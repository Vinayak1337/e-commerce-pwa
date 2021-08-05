import { Component } from 'react';
import LandingPage from '../Pages/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from '../Pages/Shop/Shop';
import Header from '../Components/Header/Header';
import Authentication from '../Pages/Authentication/Authentication';
import { auth, createUser } from '../Firebase/firebase.utils';
import firebase from "firebase";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setUser } from '../Redux/User/UserActions';

class App extends Component<AppProps> {
  
  unsubscribeFromAuth: firebase.Unsubscribe | Function = () => {};

  componentDidMount() {
    const setCurrentUser = this.props.setUser;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return setCurrentUser(userAuth);
      const userRef = await createUser(userAuth);

      userRef?.onSnapshot(snapshot => {
        const user = { id: snapshot.id, ...snapshot.data() } as User;
        return setCurrentUser(user);
      })
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUser: (user: any) => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(App);
