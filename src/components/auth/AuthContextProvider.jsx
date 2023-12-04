import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    console.log(user);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}