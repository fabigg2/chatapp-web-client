import styled from 'styled-components';
import { BodyHeader } from '../../components/BodyHeader';
import { BodyMessage } from '../../components/BodyMessages';
import { TextBox } from '../../components/TextBox';


export const ChatBody = () => {
    return (
        <Body>
            <BodyHeader />
            <BodyMessage />
            <TextBox />
        </Body>
    )
}



const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

