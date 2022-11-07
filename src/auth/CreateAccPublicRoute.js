import { Redirect, Route } from 'react-router-dom';
export const CreateAccPublicRoute = props => {

    if (!localStorage.getItem('customtoken') ) return <Redirect to="/createaccount" /> 
    return <Route {...props} />    

}   

