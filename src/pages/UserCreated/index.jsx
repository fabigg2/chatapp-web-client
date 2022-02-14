import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routesPath } from "../../settings/routesPath";
import {auth} from '../../services/auth'; 
import { useState } from "react";
import { AlertDanger } from "../../components/ALert";

export const UserCreatedConfirmation = () => {
    const { data } = useSelector(state => state.tmp);
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [succ, setSucc] = useState('');

    const goLogin = () => {
        navigate(routesPath.login);
    }
    const resendLink = async() => {
        try {
            await auth.sendLink(data.data.email);
            setSucc('We have send the verfification link to'+data.data.email);
        } catch (error) {
            setErr('no se envio en link intenta de nuevo')
        }
    }
    return (
        <>
            {
                (data && data.data) &&
                <Container>
                    {err && <AlertDanger text={err} setErr={setErr} /> }
                    {succ && <AlertDanger text={succ} setErr={setSucc} success={true}/> }
                    <p>Su cuenta se ha creado satisfatoria mente <span>Hemos enviado un un enlase de verificacion al correo: {data.data.email}</span></p>
                    <Button onClick={() => resendLink()} disabled={true} >Reenviar enlace</Button>
                    <Button onClick={() => goLogin()}>Volver a login</Button>
                </Container>
            }
        </>


    )
}

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:30px;
    background-color: #00000089;
    border: 1px solid #0d970099;
    border-radius: 5px;
    color: #fff;
    gap: 10px;
    p{
        font-size: 1.2rem;
    }
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    background-color: #0066ff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    &:disabled{
        opacity: .5;
        pointer-events: none;
    }
`