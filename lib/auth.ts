import * as BigCommerce from 'node-bigcommerce';
import { NextApiRequest } from 'next';
// import { ApiConfig, QueryParams, SessionContextProps, SessionProps } from '../types';

// Create BigCommerce instance
// https://github.com/getconversio/node-bigcommerce
const bigcommerce = new BigCommerce({
    logLevel: 'info',
    clientId: 'h0tjd4j07pscea4uvgkntx1yzbtl411',
    secret: '1346795423d28c8ac477b8528d5c9a1ef4b952de120a48f76df5c5c41fa0333e',
    callback: 'https://apaceindy.herokuapp.com/api/auth',
    responseType: 'json',
    headers: { 'Accept-Encoding': '*' },
    apiVersion: 'v3'
});
const bigcommerceSigned = new BigCommerce({
    secret: '1346795423d28c8ac477b8528d5c9a1ef4b952de120a48f76df5c5c41fa0333e',
    responseType: 'json'
});



interface QueryParams {
    [key: string]: string | string[];
}

export function getBCAuth(query: QueryParams) {
    return bigcommerce.authorize(query);
}

export function getBCVerify({ signed_payload }: QueryParams) {

    return bigcommerceSigned.verify(signed_payload);
}
