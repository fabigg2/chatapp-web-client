import {io} from 'socket.io-client';


export const  useSoketIO = ()=>{
    const socketConection = SokectConection.socketIO;
    
    const listenEvent = (event, callback)=>{
        socketConection.on(event, callback);
    }

    const emintEvent = (event, data)=>{
        socketConection.on(event, data);
    }


    return {listenEvent, emintEvent};

}

















export class SokectConection {
    static socketIO

}