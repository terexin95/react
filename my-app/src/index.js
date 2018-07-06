import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello() {
	let phraseeee = "World"
	return(
			<h1>Hello {phraseeee+2018}</h1>
		)
}

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
