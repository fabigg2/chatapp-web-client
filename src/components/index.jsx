import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#8be4f0,#04abc9,#22223f);
    font-family: Lato;
`

export const Input = styled.input`
    display: block;
    outline: none;
    background: transparent;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #fff;
    color: #eeeeee;
    min-height: 50px;
    font-size: 1rem;
    &::placeholder{
        color: #9b9b9b;
        font-size: .8rem;
    }
`
export const InputError = styled.span`
    display: block;
    color: #8f1919;
    font-size: 1rem;
    letter-spacing: 1.2px;
`
export const Label = styled.label`
    font-size: 1.1rem;
    color: #ffffff;
`

export const FormItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FormTitle = styled.h2`
    color: #4cc9f0;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
`

export const ButtonRd = styled.button`
    display: block;
    height: 50px;
    background: ${props=>props.bg ? props.bg : '#f72585'};
    margin-top: ${props=>props.top ? props.top+'px' : 0+'px' };
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
        opacity: .9;
    }
    &:disabled{
        opacity: .7;
    }
` 

export const ButtonOption = styled.a`
    display: block;
    height: 50px;
    background: ${props=>props.bg ? props.bg : '#1288d6'};
    margin-top: ${props=>props.top ? props.top+'px' : 0+'px' };
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #fff;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
` 


export const Alert = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${props=>props.danger ? '#ff1a1a' : '#059b00' } ;
    background: ${props=>props.danger ? '#ff1a1a96' : '#059b0096' };
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff
`

export const Error = styled.div`
    width: 400px;
    min-height: 200px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${props=>props.danger ? '#ff1a1a' : '#059b00' } ;
    background: ${props=>props.danger ? '#ff1a1a96' : '#059b0096' };
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff
`