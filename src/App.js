import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
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
import SignUpTest from 'auth/SignUptest';
import Logintest from 'auth/Logintest';
import LoginHomePageTest from 'auth/LoginHomePageTest';
// import { PrivateRoute } from './auth/PrivateRoute';


WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

   

    return ( 
        <>     

    
          
         <Route exact path="/login" component={Login} /> 
         <Route exact path="/logintest" component={Logintest} />   
         <Route exact path="/signup" component={SignupNow} />  
         <Route exact path="/signuptest" component={SignUpTest} />  
         <Route exact path="/homepagetest" component={LoginHomePageTest} />  
        

          <Route exact path="/createpassword" component={CreateLoginPassword} />   
          <Route exact path="/createaccount" component={CreateAccountS} />    
         
        <div className="md:ml-64 white "> 
        
        <Switch>
        {/* <PrivateRoute path="/" exact>
                    <Dashboard />
                    </PrivateRoute> */} 
         <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/document" component={Document} />
            <Route exact path="/gpatool" component={GpaTool} />
            <Route exact path="/printout" component={PrintOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/help" component={StudentHelpDesk} />
            <Route exact path="/coursereg" component={CourseRegistration} />  
            <Route exact path="/studentunionaffairs" component={StudentUnionAffairs} /> 
            <Route exact path="/social-media" component={SocialMedia} /> 
            <Route exact path="/coursetimetable" component={CourseTimeTables} />   
            <Route exact path="/examtimetable" component={Examtimetable} />  
            <Route exact path="/maps" component={UniversityMaps} />  
            <Route exact path="/profile-edit" component={ProfileEdit} /> 
            <Route exact path="/editpassword" component={EditPassword} /> 
            <Route exact path="/editmedia" component={EditMedia} />  
            <Route exact path="/search-year" component={SearchYear} />  
            <Route exact path="/your-result" component={YourResult} /> 
            <Route exact path="/outstanding-result" component={OutstandingResult} />  
            <Route exact path="/submit-course-form" component={SubmitCourseForm} />   
            <Route exact path="/printoutform" component={PrintOutForm} /> 
            <Route exact path="/printoutselectform" component={PrintOutSelectForm} /> 
            <Route exact path="/printoutformtable" component={PrintOutFormTable} /> 
            <Route exact path="/cgpa-calculator" component={CGPACalculator} /> 
            <Route exact path="/cgpa-forecaster" component={CGPAForecaster} /> 
            <Route exact path="/cgpa-goalsetter" component={CGPAGoalSetter} /> 
            <Route exact path="/cgpa-cal-input" component={CGPACalculatorinput} />  
            <Route exact path="/cgpa-goalsetter-input" component={CGPAGoalSetterInput} /> 
            <Route exact path="/cgpa-forecaster-input" component={CGPAForecasterInput} /> 
            <Route exact path="/upload-doc" component={UploadDoc} />     
            <Route exact path="/loadmaps" component={Maps} />   

{/* 
            padding at the left placeholder profile +++ more to be done

            default will be unselected first checkbox coursereg  +++

            push up profile info make the remaining 3 like the first one +++

            align properly printout and they shouldn't touch the end of the screen

            Course List and not List of Registered Courses. +++
          
            popup comes up after they click transfer form and not on Page load  +++
          
            align signature and date properly like on the Figma, +++ 

            each page must have name of rakoni logo and university name.  

            margin dont touch end of screen(including Text and icons )
            and screen table should have enough space both outside and inbetween on different devices +++ continous improvement for this. 

            cgpa GpaTool
            he will give me the Cgpa logic

            all the text in Course Form the text should be center. All text even course form should be centered. All First letter in Capital CASES. 

            Apply all this to Other 

            First-Semester-For 2020/2021 Academic Session. +++

            Fully functional student module by next zoom demo.  

            Make Demo myself from my laptop */}




            
           
            
            
        </Switch>         
        </div> 

          

        </>
   
    );
}

export default App; 

