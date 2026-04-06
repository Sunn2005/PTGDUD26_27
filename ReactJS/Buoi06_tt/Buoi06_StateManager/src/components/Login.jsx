import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/UserState';


const Login = () => {
  const setUser = useSetRecoilState(userState);

  return (
    <div>
      <button onClick={() => setUser({ name: 'Nguyễn Văn A' })}>
        Đăng nhập
      </button>
    </div>
  );
};

export default Login;