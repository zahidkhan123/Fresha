// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import {LoginReducer,SignupReducer,forgotPasswordReducer,verifyOtpReducer,changePasswordReducer } from '../redux/reducers/userReducer'
// import {SaloonSignupReducer,BranchSignupReducer} from "../redux/reducers/saloonReducer"
import { addCategoryReducer } from './reducers/categoryReducer'
import navbar from './reducers/navbar'
import layout from './reducers/layout'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
// import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  Login:LoginReducer,
  Signup:SignupReducer,
  Forget:forgotPasswordReducer,
  otp:verifyOtpReducer,
  changePassword:changePasswordReducer,
  // saloonSignup:SaloonSignupReducer,
  // branchSignup:BranchSignupReducer,
  addCategory: addCategoryReducer,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  // ecommerce,
  dataTables
})

export default rootReducer
