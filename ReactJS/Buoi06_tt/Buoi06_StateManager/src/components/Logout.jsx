import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/UserState';


const Logout = () => {
  const setUser = useSetRecoilState(userState);
  return <button onClick={() => setUser(null)}>Đăng xuất</button>;
};

export default Logout;