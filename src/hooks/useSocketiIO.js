import {io} from 'socket.io-client';


export const  useSoketIO = ()=>{
    const socketConection = SokectConection.socketIO;
    
    const listenEvent = (event, callback)=>{
        socketConection.on(event, callback);
    }

    const emitEvent = (event, data)=>{
        socketConection.emit(event, data);
    }


    return {listenEvent, emitEvent};

}

















export class SokectConection {
    static socketIO

}