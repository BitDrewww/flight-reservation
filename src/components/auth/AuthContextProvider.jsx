import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}