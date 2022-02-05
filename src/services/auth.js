import httpClient from '../settings/httpClient';

export const auth = {
    regularSignIn : async(data)=>{
        // console.log(data);
        return await httpClient.post('/auth/sign-in', data);
    },
    googleSignIn : async(data)=>{
        return await httpClient.post('/auth/google', data);
    },
    signWithToken : async(data)=>{
        return await httpClient.post('/auth/token', {}, {headers:{'x-token':data}});
    }
}