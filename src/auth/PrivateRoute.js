import { Redirect, Route } from 'react-router-dom';
export const PrivateRoute = props => {

    if (!localStorage.getItem('customtoken') ) return <Redirect to="/login" /> 
    return <Route {...props} />    

}   







