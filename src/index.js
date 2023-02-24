import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home';
import Map from './routes/Map';
import Hotels from './routes/Hotels';
import Help from './routes/Help';
import QA from './routes/QA';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'Map',
        element: <Map />,
      },
      {
        path: 'Hotels',
        element: <Hotels />,
      },
      {
        path: 'Help',
        element: <Help />,
      },
      {
        path: 'QA',
        element: <QA />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
