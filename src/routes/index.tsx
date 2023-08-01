import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
