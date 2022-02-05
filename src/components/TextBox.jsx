import styled from 'styled-components';


export const TextBox = () => {
    
    return (
        <BodyTextBox>
            <ChatInput />
            <SendButton>
                <i className='fas fa-paper-plane'></i>
            </SendButton>
        </BodyTextBox>
    )
};



const BodyTextBox = styled.div`
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
const SendButton = styled.div`
    font-size: 2rem;
    color: #dddddd;
    cursor: pointer;
    &:hover{
        color: #dddddd;
    }
`
