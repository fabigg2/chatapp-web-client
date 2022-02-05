import styled from 'styled-components';

export const BodyHeader = () => {
    return (
        <BodyHead>
            <OptionButon>
                <i class="fas fa-ellipsis-v"></i>
            </OptionButon>
            <BodyHeaderImg >
                <img src="https://i.pravatar.cc/50" alt="perfil" />
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
    justify-content: space-between;
`
const BodyHeaderImg = styled.div`
    width: 50;
    height: 50;
    border-radius: 50%;
    overflow: hidden;
`
const OptionButon = styled.div`
    font: .8rem;
    color: #fff;
`



