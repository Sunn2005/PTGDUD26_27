import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/ThemeState';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  return (
    <button onClick={toggle}>
      Đổi chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
    </button>
  );
};

export default ThemeToggle;