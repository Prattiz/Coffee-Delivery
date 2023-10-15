import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { defautTheme } from './styles/colors.ts';
import { BrowserRouter } from "react-router-dom";

import { Router } from './Routes.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defautTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
