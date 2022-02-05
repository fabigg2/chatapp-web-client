import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonRd, FormItem, FormTitle, Input, Label, ButtonOption, InputError } from '../../components';

export const SignUp = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const addUser = (data)=>{

    }
    return (
        <LogInForm onSubmit={handleSubmit(addUser)}>
            <FormTitle>
                Sign Up          
            </FormTitle>
            <FormItem>
                <Label for="#name">Name</Label>
                <Input {...register('name',{required: true})} placeholder='Type your name' id='#name' autoComplete='off' />
                {errors.name && <InputError>Type your name</InputError>}
            </FormItem>
            <FormItem>
                <Label for="#lastname">Lastname</Label>
                <Input {...register('lastname',{required: true})} placeholder='Type your lastname' id='#lastname' autoComplete='off'/>
                {errors.lastname && <InputError>Type your lastname</InputError>}
            </FormItem>
            <FormItem>
                <Label for="#email">Email</Label>
                <Input {...register('eamil',{required: true})} placeholder='Type your email' id='#email' autoComplete='off'/>
                {errors.eamil && <InputError>Type your eamil</InputError>}
            </FormItem>
            <FormItem>
                <Label for="#password">Password</Label>
                <Input {...register('password',{required: true})} placeholder='Type your password' id='#password' autoComplete='off'/>
                {errors.password && <InputError>Type your password</InputError>}
            </FormItem>
            <ButtonRd top={30}>
                Create
            </ButtonRd>
            <ButtonOption onClick={()=>navigate('/login')}>
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
