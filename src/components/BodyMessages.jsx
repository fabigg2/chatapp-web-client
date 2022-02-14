import styled from 'styled-components';
import { Message } from './Message';
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react';
import { useSoketIO } from '../hooks/useSocketiIO';
import { useDispatch } from 'react-redux';
import { _chatAddMessage } from '../redux/actions';
import { _chatEditMessage, _chatMessages } from '../redux/actions/chatAction';

export const BodyMessage = () => {
  const chat = useSelector(state => state.chat);
  const { user } = useSelector(state => state.auth.data);
  const dispatch = useDispatch();
  const ref = useRef();
  const { listenEvent, emitEvent } = useSoketIO();

  useEffect(() => {
    listenEvent('new-message', (data) => {
      dispatch(_chatAddMessage(data));
      emitEvent('message-receive', data);
    });
    listenEvent('new-message-me', (data) => {
      dispatch(_chatAddMessage(data));
    });
    listenEvent('message-receive', (data) => {
      dispatch(_chatEditMessage(data));
    });
    listenEvent('find-all-messages', (data) => {
      dispatch(_chatMessages(data));
    });
    listenEvent('deleted-message', (data) => {
      dispatch(_chatEditMessage(data));
    });
    
  }, [])


  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [chat]);

  return (
    <BodyMessges ref={ref}>
      {
        chat.map(message => (
          !message.deletedTo.includes(user._id) &&
          <Message
            from={message.from}
            to={message.to}
            id={message._id}
            message={message.msg}
            me={message.from === user._id}
            state={message.from === user._id ? message.state : null}
          />
        ))
      }
    </BodyMessges>
  )
};



const BodyMessges = styled.div`
    width: 100%;
    height: calc(100% - 140px);
    overflow-y: scroll;
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

