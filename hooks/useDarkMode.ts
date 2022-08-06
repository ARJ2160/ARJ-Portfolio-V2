import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    if (localStorage.theme) setTheme(localStorage.theme);
    else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    } else setTheme('light');
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    localStorage.setItem('theme', theme);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
