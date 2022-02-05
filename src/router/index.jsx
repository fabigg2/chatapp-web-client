import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ChatWindow } from '../pages/Chat';
import { SignIn } from '../pages/SIgnIn';
import { SignUp } from '../pages/SignUp';
import { _login } from '../redux/actions';
import { auth } from '../services/auth';
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
        path='/chat'
        element={
          <PriveteRoutes>
            <ChatWindow />
          </PriveteRoutes>}
      />
      <Route
        path='/login'
        element={
          <PublicRoutes>
            <SignIn />
          </PublicRoutes>}
      />
      <Route
        path='/signup'
        element={
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>} />
    </Routes>
  );
};