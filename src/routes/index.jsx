import React, { useContext } from "react";

// Contexts
import { AuthContext } from "../context/Auth";

// UI
import Login from "../component/Login";
import Transaction from "../component/transaction";

// Routes
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
const ROUTES =
{
    HOME: "/"
    , LOGIN: "/login"
};


export default () =>
{
    const { isAuth } = useContext( AuthContext );

    return (
        <BrowserRouter>
            <Switch>
                <Route path={ ROUTES.HOME } exact>
                    <Transaction />
                </Route>
                <Route path={ ROUTES.LOGIN }>
                    <Login />
                </Route>
            </Switch>
            {
                isAuth
                ? <Redirect to={ ROUTES.HOME } />
                : <Redirect to={ ROUTES.LOGIN } />
            }
        </BrowserRouter>
    )
}