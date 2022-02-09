import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const BodyHeader = () => {
    const { data: tmp } = useSelector(state => state.tmp);
    return (
        <BodyHead>
            <OptionButon>
                <i class="fas fa-ellipsis-v"></i>
            </OptionButon>
            <BodyHeaderImg >
                {
                    tmp && <>
                        <h3>{tmp.name} {tmp.lastname}</h3>
                        <img src="https://i.pravatar.cc/50" alt="perfil" />
                    </>
                }
            </BodyHeaderImg>
        </BodyHead >
    )
};

const BodyHead = styled.div`
    width: 100%;
    height: 70px;
    background-color: #202744;
    padding: 0 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
`
const BodyHeaderImg = styled.div`
    height: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #fff;
    text-transform: capitalize;
    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    overflow: hidden;
`
const OptionButon = styled.div`
    font: .8rem;
    color: #fff;
`



