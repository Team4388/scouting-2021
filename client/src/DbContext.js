import React, {useContext, useState} from 'react';
import PouchDb from 'pouchdb-browser';

const LocalDbContext = React.createContext();
const RemoteDbContext = React.createContext();

export function useLocalDb() {
    return useContext(LocalDbContext);
}

export function useRemoteDb() {
    return useContext(RemoteDbContext);
}

export function DbProvider({ children }) {
    const localdb = useState(new PouchDb('localdb'));
    const remotedb = useState(new PouchDb('http://localhost:5984/'));

    // function signIn()
    // {
    // // cushion.account.signOut();
    // cushion.account.signIn({
    //     username: "2021",
    //     password: "Ridgebotics",
    // });
    // }

    return (
        <LocalDbContext.Provider value={localdb}> 
            <RemoteDbContext.Provider value={remotedb}> 
                {children}
            </RemoteDbContext.Provider>
        </LocalDbContext.Provider>
    )
}