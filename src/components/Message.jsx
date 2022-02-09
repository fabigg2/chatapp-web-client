import styled from "styled-components";


export const Message = ({ message, me, state = 3 }) => {
    return (
        <Container me={me} state={state}>
            <div> <p>{message}</p></div>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: ${props => props.me ? 'flex-end' : 'flex-start'};
        p{
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