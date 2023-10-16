import { createTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import { getDesignTokens } from './theme'; // Import the getDesignTokens function from your theme file

const useColorTheme = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};

export default useColorTheme;

