import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, Store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

serviceWorkerRegistration.register();

reportWebVitals();
