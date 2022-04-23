import {LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL,   
LOGOUT,SIGNUP_REQUEST,
SIGNUP_SUCCESS,
SIGNUP_FAIL,FORGOT_PASSWORD_REQUEST,FORGOT_PASSWORD_SUCCESS,FORGOT_PASSWORD_FAIL,VERIFY_OTP_REQUEST,VERIFY_OTP_SUCCESS,VERIFY_OTP_FAIL,CHANGE_PASSWORD_REQUEST,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAIL,LOGIN_RESET    } from "../../redux/constants/userConstants.js"
// **  Initial State
// const initialState = {
//   userData: {}
// }

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return{loading : true };
      case LOGIN_SUCCESS:
        return { loading: false ,userData:action.payload};
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    // case LOGIN_RESET: {
    //   return {loading: false, error: false}
    // }
      // return {
      //   ...state,
      //   userData: action.data,
      //   [action.config.storageTokenKeyName]: action[action.config.storageTokenKeyName],
      //   [action.config.storageRefreshTokenKeyName]: action[action.config.storageRefreshTokenKeyName]
      // }
    case LOGOUT:
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    default:
      return state
  }
}


export const SignupReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return{loading : true };
      case SIGNUP_SUCCESS:
        return { loading: false ,userInfo:action.payload};
    case SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state
  }
}

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { loading: false, success: true, userData: action.payload };
    case FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const verifyOtpReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_OTP_REQUEST:
      return { loading: true };
    case VERIFY_OTP_SUCCESS:
      return { loading: false, success: true };
    case VERIFY_OTP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

