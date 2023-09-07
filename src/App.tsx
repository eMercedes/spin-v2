import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './containers/root'
import Dashboard from './containers/dashboard'
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
