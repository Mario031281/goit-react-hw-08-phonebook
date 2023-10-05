import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useEffect, lazy } from 'react';
import { Navigation } from './Navigate/Navigation';
import { useAuth } from './hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../Pages/HomePage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigation to="/" />} />
      </Route>
    </Routes>
  );
};
