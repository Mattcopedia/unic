import { Redirect, Route } from 'react-router-dom';
export const SignUpRoute = props => {

    if (!localStorage.getItem('customtoken') ) return <Redirect to="/signup" /> 
    return <Route {...props} />    

}   

