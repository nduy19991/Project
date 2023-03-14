import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './component/pages/Home/HomePage';
import { store } from './redux/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
