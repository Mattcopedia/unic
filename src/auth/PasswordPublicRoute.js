import { Redirect, Route } from 'react-router-dom';
export const PassswordRoute = props => {

    if (!localStorage.getItem('customtoken') ) return <Redirect to="/createpassword" /> 
    return <Route {...props} />    

}   

