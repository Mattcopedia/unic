import { ActionTypes } from "../constants/action-types"
import axios from "axios"
import { BaseUrl } from "components/LoginContext"


export const LoginStudent = (email,password,history) => async (dispatch) => {
  
    
    
  
    try {
        const response = await axios.post(`${BaseUrl}/api/v1/auth/login`,
        {
            email,
            password
        });

        dispatch({type:ActionTypes.AUTH_LOGIN_STUDENT, payload:response.data.data.data})
        dispatch({type:ActionTypes.SET_TO_TRUE, payload:true})

        console.log(response.data); 
       
        const RealToken = response.data.data.token
        console.log(RealToken)

        localStorage.setItem('customtoken', JSON.stringify(RealToken))
        localStorage.setItem('data', JSON.stringify(response.data.data))
        
      history.push("/")
        
      } catch (e) {
        console.log(e.message) 
        dispatch({type:ActionTypes.Auth_Login_Student_Error, payload:"Incorrect email or password"})

    }

}



export const FetchCourseInfo = () => async (dispatch) => {
        const dataname = JSON.parse(localStorage.getItem('data'));
        const data = dataname

        const headers = {
            accept: 'application/json',
            Authorization: `Bearer ${data.token}`  
        }
          try{
          
             const response = await axios.post(`${BaseUrl}/api/v1/mycourses`, {
              school: data.school,
              programme: data.programme,
          },{ 
              headers: headers
          }); 

           dispatch({type:ActionTypes.GET_COURSE_REG, payload:response.data })

           dispatch({type:ActionTypes.SET_TO_TRUE, payload:true})

           


             console.log(response.data); 
             localStorage.setItem('courseData', JSON.stringify(response.data.data)) 

        } catch (error) {
            console.error(error.message);   
          }
          
    }

export const FetchResultInfo = () => async (dispatch) => {
        const dataname = JSON.parse(localStorage.getItem('data'));
        const data = dataname

        const headers = {
            accept: 'application/json',
            Authorization: `Bearer ${data.token}`  
        }
          try{
          
            const response = await axios.post(`${BaseUrl}/api/v1/mygrades`, {
                school: data.school,
                userId: data.userId,
            },{ 
                headers: headers
            }); 

            dispatch({type:ActionTypes.GET_STUDENT_RESULT, payload:response.data })

            dispatch({type:ActionTypes.SET_TO_TRUE, payload:true})

               console.log(response.data); 
               localStorage.setItem('resultData', JSON.stringify(response.data.data))         
            
        } catch (error) {
            console.error(error.message);   
          }
          
    }




