import { useState } from "react";
import styled from "styled-components";
import { DeleteMessageModal } from "./DeleteMessageModal";


export const Message = ({ to, from, id, message, me, state = 3 }) => {
    const [delte, setDelete] = useState(false);
    const [modal, setModal] = useState(false);
    return (
        <Container
            me={me}
            state={state}
            onMouseEnter={() => setDelete(true)}
            onMouseLeave={() => setDelete(false)} >


            {
                modal && <DeleteMessageModal to={to} from={from} id={id} setModal={setModal} />
            }
            <div className="msg">
                <p>{message}
                {
                    delte && <DeleteButton
                        className="fas fa-trash-alt"
                        onClick={() => setModal(true)}
                    >

                    </DeleteButton>
                }
                </p>

                

            </div>
            {state >= 0 && <div className="check">
                {
                    (state >= 1) && <i className="fas fa-check"></i>
                }
                {
                    (state >= 2) && <i className="fas fa-check"></i>
                }
                {
                    (state === 0) && <i className="fas fa-clock"></i>
                }
            </div>
            }

        </Container>
    );
};


const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    .msg{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: ${props => props.me ? 'flex-end' : 'flex-start'};
        p{
            position: relative;
            background-color: ${props => props.me ? '#015999' : '#1BC340'};
            padding: 10px 20px;
            color: #ffffff;
            border-radius: 15px;
        }
        
    }
    .check{
        display: flex;
        flex-direction: row;
        padding: 5px 10px ;
        justify-content: ${props => props.me ? 'flex-end' : 'flex-start'};;
        i{
            font-size: .6rem;
            color: ${props => props.state === 3 ? '#0095ff' : '#aaaaaa'};
        }
    }

`
const DeleteButton = styled.i`
    color: #EEEEEE;
    position: absolute;
    top: 3px;
    right: 8px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
`
