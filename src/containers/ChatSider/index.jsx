import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


import { SideBodyItem } from '../../components/SideBodyItem';
import { SideHeader } from '../../components/SideHeader';
import { SiderFooter } from '../../components/SiderFooter';
import { useSoketIO } from '../../hooks/useSocketiIO';
import { _addFrind, _addOneFriend } from '../../redux/actions';

export const CahtSider = () => {
    const { listenEvent } = useSoketIO();
    const dispath = useDispatch();
    const selector = useSelector(state => state.friends);

    useEffect(() => {
        listenEvent('frineds-connected', (data) => {
            dispath(_addFrind(data));
        })
        listenEvent('frined-connected', (data) => {
            dispath(_addOneFriend(data));
        })
        
        listenEvent('exception', console.log)
    }, []);

    return (
        <Sider>
            <SideHeader />
            <SiderBody>
                {
                    !selector.empty && selector?.friends.map(friend => <SideBodyItem key={friend._id} {...friend} />)
                }
            </SiderBody>
            <SiderFooter />

        </Sider>
    )
}





const Sider = styled.div`
    width: 100%;
    grid-column: 1;
    display: flex;
    flex-direction: column;
    background-color: #11101D;
`
const SiderBody = styled.div`
    width: 100%;
    height: calc(100% - 140px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    gap: 15px;
    &::-webkit-scrollbar{
        width: 10px;
        background-color: #11101D;
    }
    &::-webkit-scrollbar-track{
        background-color: #11101D;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #c9c9c9;
        &:hover{
            background-color: #a0a0a0;
        }
    }
`

