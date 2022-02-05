import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { _logout } from '../redux/actions';
import { removeItemFromStorage } from '../utils/storage';
import {SokectConection} from '../hooks/useSocketiIO';


export const SideHeader = () => {
    const dispatch =  useDispatch();
    const [left, setLeft] = useState(15);
    const handleHover = ({ target }) => {
        const { left } = target.getBoundingClientRect();
        setLeft(left);
    }

    const signOut = ()=>{
        removeItemFromStorage('token');
        SokectConection.socketIO.disconnect()
        dispatch(_logout());
    }


    return (
        <SiderHeader>
            <a  className='nav'
                href="/"
                onMouseEnter={handleHover}
            >
                <span>friends</span>
                <i className="fas fa-user-friends"></i>
            </a>
            <a  className='nav'
                href="/"
                onMouseEnter={handleHover}
            >
                <span>friends</span>
                <i className="fas fa-comment-alt"></i>
            </a>
            <a  className='nav'
                onMouseEnter={handleHover}
                onClick={signOut}
            >
                <span>sign_out</span>
                <i className="fas fa-sign-out-alt"></i>
            </a>
            <Selector id="selector" left={left}></Selector>
        </SiderHeader>
    )
};


const SiderHeader = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background-color: #202744;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    z-index: 2;
    border-right: 0.5px solid #4b4b4b;
    .active{
        i{
            transform: translateY(35px);
            color: #202744;
        }
    }
    a{
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 1.1rem;
        text-decoration: none;
        z-index: 2;
        padding: 0 6px;
        cursor: pointer;
        span{
            display: flex;
            color: #202744;
            position: absolute;
            transform: translateY(-50px);
        }
        i, span{
            transition: all 500ms ease;
        }
        &:hover i{
            transform: translateY(35px);
            color: #202744;
        }
        &:hover span{
            transform: translateY(0px);
            color: #ffffff;
        }
    }
`
const Selector = styled.div`
        position: absolute;
        top: 45px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ffffff;
        border: 5px solid #11101D;
        left: ${props => (props.left - 10) + 'px'};
        transition: all 400ms ease ;
        z-index: 1;
        &::after{
            content: '';
            width: 10px;
            height: 10px;
            background: #11101D;
            position: absolute;
            right: -10px;
            top: 16px;
            border-radius: 0 100% 0 0;
        }
        &::before{
            content: '';
            width: 10px;
            height: 10px;
            background: #11101D;
            position: absolute;
            left: -10px;
            top: 16px;
            border-radius: 100% 0 0 0;
        }
`