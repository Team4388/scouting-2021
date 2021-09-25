import React from 'react';
import { useRemoteDb } from '../DbContext';

const LoginPage = () => {
    const remotedb = useRemoteDb();
    return (
        // <div className = "form_inner">
        //     <form>
        //         <h2>Login</h2>
        //         <div className="form_group">
        //             <label htmlFor="name">Name: </label>
        //             <input type="text" name="name" id="name"/>
        //         </div>
        //         <div className="form_group">
        //             <label htmlFor="password">Password: </label>
        //             <input type="text" name="password" id="password"/>
        //         </div>
        //         <input type="submit" value="LOGIN" />
        //     </form>
        // </div>
        <div>
            <button onClick={() => {
                console.log(remotedb);
                remotedb.logIn('2021', 'Ridgebotics').then(function () {
                    console.log("CouchDb Login Successful!");
                }).catch(function (err) {
                    console.log("Unable to login to CouchDb!"); 
                    console.log(err);
                });
            }}>
                Sign In 2021
            </button>
        </div>
    )
}

export default LoginPage