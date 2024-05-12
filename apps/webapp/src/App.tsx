import type { Component } from 'solid-js';
import Auth from './Auth';
import UserProvider from './UserProvider';
import './styles.scss';

const App: Component = () => {
  return (
    <UserProvider>
      <header>
        <h1>Oli</h1>
      </header>
      <Auth />
    </UserProvider>
  );
};

export default App;
