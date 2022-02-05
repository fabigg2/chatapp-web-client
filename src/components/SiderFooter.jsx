import { useSelector } from 'react-redux';
import styled from 'styled-components';


export const SiderFooter = () => {
    const {data:{user}} = useSelector(state=>state.auth);

    return (
        <Footer>
            <img src='https://i.pravatar.cc/60' alt="something" />
            <div>
                <h2>{user.name} {user.lastname}</h2>
            </div>
        </Footer>
    );
};


const Footer = styled.div`
    height: 70px;
    background-color: #202744;
    border-right: 1px solid #3b3b3b;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        border-radius: 8px;
    }
    div{
        color: #ffffff;
        font-size: .8rem;
        text-transform: capitalize;
    }
`