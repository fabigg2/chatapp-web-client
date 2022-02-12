import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SokectConection } from '../hooks/useSocketiIO';
import { _chatAddMessage } from '../redux/actions';
import { useEffect } from 'react';
import { useRef } from 'react';


export const TextBox = () => {
    const { data } = useSelector(state => state.tmp);
    const { user } = useSelector(state => state.auth.data);
    const { handleSubmit, register, reset } = useForm();
    const textRef = useRef();
    const dispatch = useDispatch();
    useEffect(()=>{
        reset()
    },[data])
    /**
     * send a message
     */
    const sendMessage = ({ msg }) => {
        const message = {
            to: data._id,
            from: user._id,
            msg,
            state: 0
        }
        // dispatch(_chatAddMessage(message));
        SokectConection.socketIO.emit('new-message', message);
        reset();
    }

    return (
        <BodyTextBox onSubmit={handleSubmit(sendMessage)}>
            <ChatInput autoComplete='off' {...register('msg', {required: true})}/>
            <SendButton>
                <i className='fas fa-paper-plane'></i>
            </SendButton>
        </BodyTextBox>
    )
};



const BodyTextBox = styled.form`
    width: 100%;
    height: 70px;
    background-color: #202744;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

`

const ChatInput = styled.input`
    width: 90%;
    height: 80%;
    background-color: #dddddd;
    border-radius: 10px;
    outline: none;
    border: none; 
    padding: 0 10px;
    font-size: 1.3rem;
    color: #191919
`
const SendButton = styled.button`
    font-size: 2rem;
    color: #dddddd;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    &:hover{
        color: #dddddd;
    }
`
