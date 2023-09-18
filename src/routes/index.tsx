import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { PrivateRoute } from './PrivateRoute';

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
