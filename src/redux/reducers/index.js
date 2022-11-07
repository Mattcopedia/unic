import { combineReducers } from "redux";

import { GetCoursesReducer, SetToTrueReducer,SetToSubmitTrueReducer,GetStudentResultReducer,AuthLoginStudentReducer,AuthLoginStudentError } from "./GetCoursesReducer";

const reducers = combineReducers ({
  allCourses: GetCoursesReducer,
  SetToTrue: SetToTrueReducer,
  SetToSubmitTrue: SetToSubmitTrueReducer,
  GetStudentResult: GetStudentResultReducer,
  AuthLoginStudent:AuthLoginStudentReducer,
  AuthLoginStudentError:AuthLoginStudentError

});

export default reducers;

