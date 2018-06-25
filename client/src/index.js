import React from 'react';
import ReactDOM from 'react-dom';
import './lightTheme.css';
import './index.css';
import App from './containers/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
