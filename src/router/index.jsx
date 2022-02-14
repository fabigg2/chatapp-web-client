import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChatWindow } from '../pages/Chat';
import { SignIn } from '../pages/SIgnIn';
import { SignUp } from '../pages/SignUp';
import { UserCreatedConfirmation } from '../pages/UserCreated';
import { _login } from '../redux/actions';
import { auth } from '../services/auth';
import { routesPath } from '../settings/routesPath';
import { getItemFromStorage, saveItemInStorage } from '../utils';
import { PriveteRoutes } from './PriveteRoutes';
import { PublicRoutes } from './PublicRoutes';




export const Router = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation('chechtoken', auth.signWithToken);

  const chekToken = () => {
    const token = getItemFromStorage('token');
    if (token) {
      mutate(token, {
        onSuccess: async ({ data: { data } }) => {
          saveItemInStorage('token', data.token);
          dispatch(_login(data));
        }
      })
    }
  }

  useEffect(() => {
    chekToken();
  }, []);


  if (isLoading) return <h2>Cargando...</h2>
  return (
    <Routes>
      <Route
        path={routesPath.chat}
        element={
          <PriveteRoutes>
            <ChatWindow />
          </PriveteRoutes>}
      />
      <Route
        path={routesPath.login}
        element={
          <PublicRoutes>
            <SignIn />
          </PublicRoutes>}
      />
      <Route
        path={routesPath.userCorimation}
        element={
          <UserCreatedConfirmation />
        }
      />
      <Route
        path={routesPath.signup}
        element={
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>}
      />
      <Route path='*' element={<Navigate to={routesPath.login}  />} />
    </Routes>
  );
};
