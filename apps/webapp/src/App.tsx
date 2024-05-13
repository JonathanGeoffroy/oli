import type { Component } from 'solid-js';
import Router from './Router';
import UserProvider from './UserProvider';
import './styles.scss';

const App: Component = () => {
  return (
    <UserProvider>
      <header>
        <h1>Oli</h1>
      </header>
      <Router />
    </UserProvider>
  );
};

export default App;
