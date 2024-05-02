import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles/theme.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/:guestsName',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
