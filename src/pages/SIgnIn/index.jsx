import styled from 'styled-components';
import { useMutation } from 'react-query';
import { _login } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import { auth } from '../../services/auth';
import { ButtonRd, FormItem, FormTitle, Input, Label, ButtonOption, InputError, Alert, Error } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { saveItemInStorage } from '../../utils';

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { mutate, isLoading, isError, error } = useMutation('sigIn', auth.regularSignIn);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const logIn = (data) => {
        mutate(data, {
            onSuccess: async ({ data: { data } }) => {
                saveItemInStorage('token', data.token);
                dispatch(_login(data))
                navigate('/chat');
            }
        })
    }
    if (isError && !error.response) return <Error danger>network error</Error>
    return (
        <LogInForm onSubmit={handleSubmit(logIn)}>
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


