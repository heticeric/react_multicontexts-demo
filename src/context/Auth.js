import  React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = props =>
{
    const [ isAuth, setAuth ] = useState( false );

    return(
        <AuthContext.Provider value={ { isAuth, setAuth } }>
            { props.children }
        </AuthContext.Provider>        
    )
}

export {
    AuthContext
    ,AuthProvider
}