import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store'
import { Provider as StoreProvider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store} >
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);