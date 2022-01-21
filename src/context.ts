import { createContext } from 'react';

export interface IContextValue {
    userinfo?: {
        name: string;
        email: string;
    }
}

export default createContext<IContextValue>({});