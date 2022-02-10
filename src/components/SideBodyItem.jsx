import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSoketIO } from '../hooks/useSocketiIO';
import { _addTemp } from '../redux/actions';


export const SideBodyItem = ({_id, name, lastname, isConnected}) => {
    const dispatch= useDispatch();
    const {user} = useSelector(state=>state.auth.data);
    const {emitEvent} = useSoketIO();
    const setTempUser = (tmpUser)=>{
        dispatch(_addTemp(tmpUser))
        emitEvent('find-all-messages', {from: user._id, to: _id});
    }

    return (
        <Container onClick={()=>setTempUser({_id, name, lastname, isConnected})}>
            <img src="https://i.pravatar.cc/60" />
            <div className='u-content'>
                <h4>{name} {lastname}</h4>
                {/* <p>hello !</p> */}
            </div>
            <div className='opt'>
                {/* <p>yesterday</p> */}
                <span className={isConnected ? 'conneted' : 'disconneted'}></span>

            </div>
        </Container>
    )
};


const Container = styled.div`
    width: 98%;
    height: 70px;
    padding: 5px 10px;
    border-bottom: 0.1px solid #5e5e5e;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        background: #000000;
        box-shadow: 0 0 5px #ffffff28;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #888888;
    }
    .u-content{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2px 10px;
        overflow: hidden;
        color: #ffffff;
        h4{
            font-size: 1rem;
            letter-spacing: 1px;
            font-weight: bold;
            font-family: Lato;
            text-transform: capitalize;

        }
        p{
            font-size: .8rem;
            letter-spacing: 1px;
            font-weight: 300;
            font-family: Suranna;
        }
    }
    .opt{
        padding: 5px;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #ffffff;
        font-size: .8rem;
        letter-spacing: 1px;
        font-weight: 300;
        .conneted, .disconneted{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-left: 42px;
        }
        .conneted{
            background-color: #00ff00;
        }
        .disconneted{
            background-color: #808080;
        }
    }

`