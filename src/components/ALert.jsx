import styled from "styled-components";


export const AlertDanger = ({ text, setErr, success=false }) => (
    <AlertDange success={success}>
        <span><i className="fas fa-exclamation-circle"></i></span>
        <p>{text}</p>
        {/* <p>revisa tu correo: {data.user.email[0]}******{data.user.email.split('@')[1]} y valida tu cuenta</p> */}

        <i onClick={() => setErr('')} className="fas fa-times"></i>
    </AlertDange>)


const AlertDange = styled.div`
    position: fixed;
    padding: 20px;
    padding-right: 40px;
    min-width: 300px;
    max-width: 400px;
    background-color: #00000090;
    border: 2px solid ${props=>props.success ? '#13a500' :'#ff5f5f'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 100;
    top: 30px;
    right: 30px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    animation: animate 1s ease-in-out;
    span{
        color: ${props=>props.success ? '#13a500' :'#ff5f5f'};
        margin-right: 20px;
    }
    &>i{
        position: absolute;
        top: 5px;
        right: -5px;
        color: #dddddd;
        font-size: 1.5rem;
        margin: 0 20px;
        cursor: pointer;
    }
    @keyframes animate {
        0%{
            transform: translateX(450px);
        }
        100%{
            transform: translateX(0);
        }
    }
`