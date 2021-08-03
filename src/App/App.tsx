import { Component } from 'react';
import LandingPage from '../Pages/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from '../Pages/Shop/Shop';
import Header from '../Components/Header/Header';
import Authentication from '../Pages/Authentication/Authentication';
import { auth, createUser } from '../Firebase/firebase.utils';
import firebase from "firebase"

class App extends Component {
  state: AppState;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      user:  null,
    }
  }

  get user() {
    return this.state.user;
  }

  unsubscribeFromAuth: firebase.Unsubscribe | Function = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return this.setState({ user: null });
      const userRef = await createUser(userAuth);

      userRef?.onSnapshot(snapshot => {
        this.setState({ user: {
          id: snapshot.id, ...snapshot.data()
        }})
      })
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
