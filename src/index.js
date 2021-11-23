import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { ToDoProvider } from './context/ToDoContext';

ReactDOM.render(
	<ToDoProvider>
		<React.StrictMode>
			<App />
	</React.StrictMode>
	</ToDoProvider>,
  document.getElementById('root')
);
