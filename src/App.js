




import { Switch, Route } from 'react-router-dom';
import Document from 'pages/Document';
import GpaTool from 'pages/GpaTool';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result';  
import CourseRegistration from 'pages/CourseRegistration';
import StudentHelpDesk from 'components/StudentHelpDesk';
import StudentUnionAffairs from 'components/StudentUnionAffairs';
import SocialMedia from 'components/SocialMedia';
import Login from 'components/Login'; 
import PrintOutForm from 'components/PrintOutComponent/PrintOutForm';

 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    
import CreateAccountS from 'components/CreateAccount';  

import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import CourseTimeTables from 'components/CourseTimeTable';
import Examtimetable from "components/Examtimetable"
import UniversityMaps from 'components/UniversityMaps';
import ProfileEdit from 'components/ProfileComponents/ProfileEdit';
import EditPassword from 'components/ProfileComponents/EditPassword';
import EditMedia from 'components/ProfileComponents/EditMedia';
import SearchYear from "components/ResultsComponents/SearchYear"
import YourResult from 'components/ResultsComponents/YourResult';
import OutstandingResult from 'components/ResultsComponents/OutstandingResult';
import SubmitCourseForm from 'components/CoureRegistrationFormComponent/SubmitCourseForm';
import PrintOutSelectForm from 'components/PrintOutComponent/PrintOutSelectForm';
import PrintOutFormTable from 'components/PrintOutComponent/PrintOutFormTable';
import CGPACalculator from 'components/CGPAComponent/CGPACalculator';
import CGPAForecaster from 'components/CGPAComponent/CGPAForeCaster';
import CGPAGoalSetter from 'components/CGPAComponent/CGPAGoalSetter';
import CGPACalculatorinput from 'components/CGPAComponent/CGPACalculatorInput';
import CGPAGoalSetterInput from 'components/CGPAComponent/CGPAGoalSetterInput';
import CGPAForecasterInput from 'components/CGPAComponent/CGPAForecasterInput';
import UploadDoc from 'components/DocumentComponents/UploadDoc';
import Maps from 'components/Maps';

import { PrivateRoute } from './auth/PrivateRoute';   

import HomePage from 'pages/Dashboard';
import { SignUpRoute } from 'auth/SignUpPublicRoute';
import { PassswordRoute } from 'auth/PasswordPublicRoute';
import { CreateAccPublicRoute } from 'auth/CreateAccPublicRoute';






WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

    // const history = createBrowserHistory();

    return ( 
        <>     
                     {/* <div className="md:ml-64 white ">  */}

        <Switch>

        <Route  path="/login" component={Login} /> 
          <Route  path="/signup" component={SignupNow} /> 
          <Route  path="/createpassword" component={CreateLoginPassword} /> 
          <Route  path="/createaccount" component={CreateAccountS} /> 
            
        <SignUpRoute path="/signup">
            <SignupNow />
         </SignUpRoute>

         <PassswordRoute path="/createpassword">
            <CreateLoginPassword />
         </PassswordRoute>

         <CreateAccPublicRoute path="/createaccount">
            <CreateAccountS />
         </CreateAccPublicRoute>

  


        <PrivateRoute path="/printout" >
                    <PrintOut />
                    </PrivateRoute> 

        <PrivateRoute path="/result" >
                    <Result />
                    </PrivateRoute> 
                    
        <PrivateRoute path="/gpatool" >
                    <GpaTool />
                    </PrivateRoute> 

        <PrivateRoute path='/document'> 
                <Document />
                </PrivateRoute> 
                   
            <PrivateRoute path="/profile" >
                    <Profile />
                    </PrivateRoute> 

            <PrivateRoute  path="/result">  <Result /> </PrivateRoute>
            <PrivateRoute  path="/help">  <StudentHelpDesk /> </PrivateRoute>
            <PrivateRoute  path="/coursereg">  <CourseRegistration /> </PrivateRoute>  
            <PrivateRoute  path="/studentunionaffairs">  <StudentUnionAffairs /> </PrivateRoute> 
            <PrivateRoute  path="/social-media">  <SocialMedia /> </PrivateRoute> 
            <PrivateRoute  path="/coursetimetable">  <CourseTimeTables /> </PrivateRoute>   
            <PrivateRoute  path="/examtimetable">  <Examtimetable /> </PrivateRoute>  
            <PrivateRoute  path="/maps">  <UniversityMaps /> </PrivateRoute>  
            <PrivateRoute  path="/profile-edit">  <ProfileEdit /> </PrivateRoute> 
            <PrivateRoute  path="/editpassword">  <EditPassword /> </PrivateRoute> 
            <PrivateRoute  path="/editmedia">  <EditMedia /> </PrivateRoute>  
            <PrivateRoute  path="/search-year">  <SearchYear /> </PrivateRoute>  
            <PrivateRoute  path="/your-result">  <YourResult /> </PrivateRoute> 
            <PrivateRoute  path="/outstanding-result">  <OutstandingResult /> </PrivateRoute>  
            <PrivateRoute  path="/submit-course-form">  <SubmitCourseForm /> </PrivateRoute>   
            <PrivateRoute  path="/printoutform">  <PrintOutForm /> </PrivateRoute> 
            <PrivateRoute  path="/printoutselectform">  <PrintOutSelectForm /> </PrivateRoute> 
            <PrivateRoute  path="/printoutformtable">  <PrintOutFormTable /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-calculator">  <CGPACalculator /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-forecaster">  <CGPAForecaster /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-goalsetter">  <CGPAGoalSetter /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-cal-input">  <CGPACalculatorinput /> </PrivateRoute>  
            <PrivateRoute  path="/cgpa-goalsetter-input">  <CGPAGoalSetterInput /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-forecaster-input">  <CGPAForecasterInput /> </PrivateRoute> 
            <PrivateRoute  path="/upload-doc">  <UploadDoc /> </PrivateRoute>     
            <PrivateRoute  path="/loadmaps">  <Maps /> </PrivateRoute>   
     
            
            <PrivateRoute path='/'> 
                <HomePage />
                </PrivateRoute> 
            </Switch> 
      
              
        {/* </div> */}
        

          

        </>
   
    );
}

export default App; 























