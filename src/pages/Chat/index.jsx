import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


import { ChatBody } from '../../containers/ChatBody';
import { CahtSider } from '../../containers/ChatSider';
// import { useSoketIO } from '../../hooks/useSocketiIO';
import { useEffect } from 'react';

export const ChatWindow = () => {
    
    

    // const {listenEvent} = useSoketIO();

    return (
        <Container>
            <CahtSider />
            <ChatBody />
        </Container>
    )
}

// const primary = '#202744';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100vh;
`


