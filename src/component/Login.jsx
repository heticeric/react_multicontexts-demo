import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

export default () =>
{
    const { setAuth } = useContext(AuthContext);

    return (
        <button
            onClick={ _ => setAuth( true ) }
        > AUTHENTIFIEZ-VOUS
        </button>
    );
}