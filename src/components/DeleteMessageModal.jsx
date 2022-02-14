import styled from "styled-components";
import { useSoketIO } from "../hooks/useSocketiIO";
import { useSelector } from "react-redux";

export const DeleteMessageModal = ({from, to, id, setModal }) => {
    const { _id } = useSelector(state => state.auth.data.user);
    console.log(_id, from)
    const { emitEvent } = useSoketIO();
    const deleteMessage = (who) => {
        setModal(false);
        console.log(who, id);
        if (who === 'me')
            return emitEvent('delete-message', { id, who:[_id]});
        emitEvent('delete-message', { id, who:[from, to ] });
    }

    return (
        <DeleteAlert id="deleteMessageModal">
            <DeleteCard>
                <DeleteCardItem onClick={() => deleteMessage('me')}>
                    <i className="fas fa-user-alt"></i>
                    <p>Eliminar para mi</p>
                </DeleteCardItem>
                {_id === from && <DeleteCardItem onClick={() => deleteMessage('every')}>
                    <i className="fas fa-user-friends"></i>
                    <p>Eliminar para todos</p>
                </DeleteCardItem>
                }
            </DeleteCard>
        </DeleteAlert>
    )

}

const DeleteAlert = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #0000002d;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DeleteCard = styled.div`
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 15px;
    color: #202744;
    max-width: 300px;
    box-shadow: 5px 5px 10px #20274449;
    display: flex;
    gap: 10px;
    flex-direction: column;
    
`
const DeleteCardItem = styled.div`
    border-bottom: 1px solid #2027443e;
    display: flex;
    padding: 2px;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: bold;
    i{
        font-size: 1.2rem;
        margin-right: 3px;
    }
    &:hover{

    }
`