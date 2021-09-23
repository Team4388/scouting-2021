import React from 'react'
import { useLocalDb } from '../DbContext';

const InputPage = () => {
    const localdb = useLocalDb();
    console.log(localdb);
    return (
        <div>
            
        </div>
    )
}

export default InputPage
