
import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from './recoil/ThemeState';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import ThemeToggle from './components/ThemeToggle';


import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import { userState } from './recoil/UserState';

function App() {
  const theme = useRecoilValue(themeState);
  const user = useRecoilValue(userState);


  return (
    <div >
      <h2>Bài 1: Counter Global</h2>
      <ComponentA />
      <ComponentB />

      <hr />

      <h2>Bài 2: Theme Toggle</h2>
      <ThemeToggle />

      <hr />

      <h2>Bài 3: Auth Giả Lập</h2>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Profile />
          <Logout />
        </div>
      )}
    </div>
  );
}

export default App;