import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { routesPath } from '../../settings/routesPath';
import styled from 'styled-components';
import { ButtonRd, FormItem, FormTitle, Input, Label, ButtonOption, InputError, Error, Alert } from '../../components';
import { AlertDanger } from '../../components/ALert';
import { userServices } from '../../services/services';
import { useDispatch } from 'react-redux';
import {_addTemp} from '../../redux/actions';

export const SignUp = () => {
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { mutate, isLoading, isError, error } = useMutation('create-user', userServices.create);
    const [err, setErr] = useState();
    const addUser = (data) => {

        mutate(data, {
            onSuccess: async (data) => {
                navigate(routesPath.userCorimation);
                dispatch(_addTemp(data.data));
            },
            onError: async (error) => {
                if (error.response)
                    if (error.response.status===400 && error.response.data.errors[0].msg === data.email+' already exist') {
                        setErr('existe una cuenta asociada a este correo('+data.email+'). Porfavor inicie sesion');
                    }
            },
        })
    }
    if (isError && !error.response) return <Error danger>network error</Error>

    return (
        <LogInForm onSubmit={handleSubmit(addUser)}>
            {
                (err) && <AlertDanger
                    text={err}
                    setErr={setErr} />
            }
            <FormTitle>
                Sign Up
            </FormTitle>
            {(isError && error.response.status === 400) && <Alert danger>Error al guardar usuario</Alert>}
            <FormItem>
                <Label for="#name">Name</Label>
                <Input {...register('name', { required: true })} placeholder='Type your name' id='#name' autoComplete='off' />
                {errors.name && <InputError>Type your name</InputError>}
            </FormItem>
            <FormItem>
                <Label for="#lastname">Lastname</Label>
                <Input {...register('lastname', { required: true })} placeholder='Type your lastname' id='#lastname' autoComplete='off' />
                {errors.lastname && <InputError>Type your lastname</InputError>}
            </FormItem>
            <FormItem>
                <Label for="#email">Email</Label>
                <Input type='email' {...register('email', { required: true })} placeholder='Type your email' id='#email' autoComplete='off' />
                {errors.eamil && <InputError>Type your eamil</InputError>}
            </FormItem>
            <FormItem>
                <Label for="#password">Password</Label>
                <Input type='password' {...register('password', { required: true })} placeholder='Type your password' id='#password' autoComplete='off' />
                {errors.password && <InputError>Type your password</InputError>}
            </FormItem>
            <ButtonRd top={30}
                disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Create'}
            </ButtonRd>
            <ButtonOption onClick={() => navigate('/login')}>
                Log In
            </ButtonOption>
        </LogInForm>
    );
};


const LogInForm = styled.form`
    width: 380px;
    min-height: 550px;
    background: #00000089;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    justify-content: center;
    gap: 20px;
`
