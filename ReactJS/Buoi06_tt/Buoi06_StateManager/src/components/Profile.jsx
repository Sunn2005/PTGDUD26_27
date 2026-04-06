import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/UserState';


const Profile = () => {
  const user = useRecoilValue(userState);
  return <h2>Chào mừng, {user?.name}!</h2>;
};

export default Profile;