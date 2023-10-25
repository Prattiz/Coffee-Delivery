import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { defautTheme } from './styles/colors.ts';
import { BrowserRouter } from "react-router-dom";
import { CustomerContextProvider } from './Context/ValuesContext.tsx';

import { Router } from './Routes/Routes.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defautTheme}>
        <CustomerContextProvider>
          <Router />
          <GlobalStyles />
        </CustomerContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
