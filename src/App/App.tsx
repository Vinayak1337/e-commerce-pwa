import { Component } from 'react';
import LandingPage from '../Pages/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from '../Pages/Shop/Shop';
import Header from '../Components/Header/Header';
import Authentication from '../Pages/Authentication/Authentication';
import { auth } from '../Firebase/firebase.utils';
import firebase from "firebase"

class App extends Component {
  state: AppState;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      user:  null,
    }
  }

  unsubscribeFromAuth: firebase.Unsubscribe | Function = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
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
