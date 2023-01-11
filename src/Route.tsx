import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import ChangePassword from '@pages/ChangePassword';
import PasswordRequest from '@pages/PasswordRequest';
import { authStore } from '@stores/authStore';

// const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
// const LoginPage = React.lazy(() => import('./pages/LoginPage'));
// const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));

export const AppRoute = observer(() => {
  const { isAuthenticated } = authStore;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {isAuthenticated && <Route path="/dashboard" element={<DashboardPage />} />}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/change-password/:link" element={<ChangePassword />} />
        <Route path="/change-password-request" element={<PasswordRequest />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
});
