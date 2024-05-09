import type { Component } from 'solid-js';
import Auth from './Auth';
import UserProvider from './UserProvider';

const App: Component = () => {
  return (
    <UserProvider>
      <header>
        <p>Oli</p>
      </header>
      <Auth />
    </UserProvider>
  );
};

export default App;
