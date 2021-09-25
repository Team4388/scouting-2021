import PouchDB from 'pouchdb';
import React, {useContext, useState} from 'react';

const LocalDbContext = React.createContext();
const RemoteDbContext = React.createContext();

export function useLocalDb() {
    return useContext(LocalDbContext);
}

export function useRemoteDb() {
    return useContext(RemoteDbContext);
}

export function DbProvider({ children }) {
    const [localdb, setLocaldb] = useState(new PouchDB('kcmt2021'));
    //used in development server
    const [remotedb, setRemotedb] = useState(new PouchDB('http://192.168.7.190:5984/kcmt2021', {
        skip_setup: true,
        auth: {
            username: '2021',
            password: 'Ridgebotics'
        }
    }));
    // const [remotedb, setRemotedb] = useState(new PouchDB(window.location.protocol + "//" + window.location.hostname + ":5984/kcmt2021", {skip_setup: true}))

    //Login to the Remote Database
    // remotedb.logIn('2021', 'Ridgebotics').then(function () {
    //     console.log("CouchDb Login Successful!");
    // }).catch(function (err) {
    //     console.log("Unable to login to CouchDb!"); 
    //     console.log(err);
    // });

    localdb.sync(remotedb, {
        live: true,
        retry: true,
    }).on('change', function (change) {
    }).on('paused', function (info) {
    }).on('active', function (info) {
    }).on('error', function (err) {
    });




    return (
        <LocalDbContext.Provider value={localdb}> 
            <RemoteDbContext.Provider value={remotedb}> 
                {children}
            </RemoteDbContext.Provider>
        </LocalDbContext.Provider>
    )
}