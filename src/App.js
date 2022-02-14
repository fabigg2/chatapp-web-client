import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Container } from "./components";
import { SokectConection } from "./hooks/useSocketiIO";
import { Router } from "./router";


function App() {
  const selector = useSelector(state=>state.auth);
  useEffect(() => {
    if(selector.logged){
      const host = window.location.hostname === 'localhost' ? process.env.REACT_APP_API_HOST : process.env.REACT_APP_API_HOST_PRO
      SokectConection.socketIO = io(host,{
        extraHeaders:{
          'x-token': selector.data.token
        }
      });
    }
  }, [selector])
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
