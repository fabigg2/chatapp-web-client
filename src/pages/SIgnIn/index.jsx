import styled from 'styled-components';
import { useMutation } from 'react-query';
import { _login } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import { auth } from '../../services/auth';
import { ButtonRd, FormItem, FormTitle, Input, Label, ButtonOption, InputError, Alert, Error } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { saveItemInStorage } from '../../utils';
import GoogleLogin from 'react-google-login';
import { AlertDanger } from '../../components/ALert';
import { useState } from 'react';

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { mutate, isLoading, isError, error } = useMutation('sigIn', auth.regularSignIn);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [err, setErr] = useState(false);

    const onLogin = (data) => {
        console.log(data)
        if (data.user.isValidated) {
            saveItemInStorage('token', data.token);
            dispatch(_login(data))
            return navigate('/chat');
        }
        setErr(`Tu cuenta no esta validada, revisa tu correo y valida tu cuenta`);

    }
    const logIn = (data) => {
        mutate(data, {
            onSuccess: async ({ data: { data } }) => {
                onLogin(data);
            }
        })
    }

    const responseGoogle = async (response) => {
        try {
            const { data } = await auth.googleSignIn(response.tokenId);
            // console.log(data.data.user)
            onLogin(data.data);
        } catch (error) {
            if (error.response.status === 400)
                setErr(`Correo esta registrado intenta ingresar con correo y contraseña`);

        }
    }

    if (isError && !error.response) return <Error danger>network error</Error>
    return (
        <LogInForm onSubmit={handleSubmit(logIn)}>
            {
                (err) && <AlertDanger
                    text={ err}
                    setErr={setErr} />
            }
            <FormTitle>
                Login
            </FormTitle>
            {(isError && error.response.status === 400) && <Alert danger>User or password incorrect</Alert>}
            <FormItem>
                <Label htmlFor="#email">Email</Label>
                <Input type="email" {...register('email', { required: true })} placeholder='Type your email' id='#email' autoComplete='off' />
                {errors.email && <InputError>Ingrese email</InputError>}
            </FormItem>
            <FormItem>
                <Label htmlFor="#password">Password</Label>
                <Input type="password" {...register('password', { required: true })} placeholder='Type your password' id='#password' />
                {errors.password && <InputError>Ingrese password</InputError>}
            </FormItem>
            <ButtonRd
                disabled={isLoading}
                top={30}
            >
                {isLoading ? 'Loading...' : 'Login'}
            </ButtonRd>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <ButtonOption
                onClick={() => navigate('/signup')}
            >
                Create Account
            </ButtonOption>
        </LogInForm>
    );
};


const LogInForm = styled.form`
    width: 380px;
    height: 550px;
    background: #00000089;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    justify-content: center;
    gap: 20px;
`


