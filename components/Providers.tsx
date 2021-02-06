import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '../styles/theme';

const Provider: React.FC = ({children}) => {
  const { value } = useDarkMode(false, {
    onChange: undefined,
  });
  const theme = value ? darkTheme : lightTheme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
}

export default Provider;
