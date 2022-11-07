import { ActionTypes } from "../constants/action-types"

const initialState = {
    courses: []
}

const initialResultState = {
    results: []
}

const oldState = {
    Set: false
}

const previousState = {
    previous: false
}

const LoginState = {
    login: []
}

const ErrorState = {
    error: ""
} 

export const GetCoursesReducer = (state = initialState, {type, payload}) => {
    
    switch (type) {
        case ActionTypes.GET_COURSE_REG:      
        return {...state, courses:payload}

        default:
            return state
    }
}  






export const GetStudentResultReducer = (state = initialResultState, {type, payload}) => {
    
    switch (type) {
        case ActionTypes.GET_COURSE_REG:      
        return {...state, results:payload}

        default:
            return state
    }
}  

export const SetToTrueReducer = (state = oldState, {type, payload}) => {
    
    switch (type) {
        case ActionTypes.SET_TO_TRUE:      
        return {...state, Set:payload}

        default:
            return state
    }
}

export const SetToSubmitTrueReducer = (state = previousState, {type, payload}) => {
    
    switch (type) {
        case ActionTypes.SET_TO_SUBMIT_TRUE:      
        return {...state, previous:payload}

        default:
            return state
    }
}

export const AuthLoginStudentReducer = (state = LoginState, {type, payload}) => {
    
    switch (type) {
        case ActionTypes.AUTH_LOGIN_STUDENT:      
        return {...state, login:payload}

        default:
            return state
    }
}

export const AuthLoginStudentError = (state = ErrorState, {type, payload}) => {
    
    switch (type) {
        case ActionTypes.Auth_Login_Student_Error:      
        return {...state, error:payload}

        default:
            return state
    }
}  