import {LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL,   
LOGOUT,SIGNUP_REQUEST,
SIGNUP_SUCCESS,
SIGNUP_FAIL,FORGOT_PASSWORD_REQUEST,FORGOT_PASSWORD_SUCCESS,FORGOT_PASSWORD_FAIL,VERIFY_OTP_REQUEST,VERIFY_OTP_SUCCESS,VERIFY_OTP_FAIL,CHANGE_PASSWORD_REQUEST,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAIL } from "../../redux/constants/userConstants.js"
import { SERVER_IP } from "../../configs/env.js";
import axios from "axios";
// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

// const config = useJwt.jwtConfig

export const loginAction = (login_data) => async (dispatch) => {

  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json',

      },
    };
// debugger
    const { data } = await axios.post(
      `${SERVER_IP}/api/v1/users/login`,
      login_data,
      config
    );
    // debugger
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data});
  const complete={...data,ability:[
        {
          action: 'manage',
          subject: 'all'
        }
      ]}
      // console.log(data);
      localStorage.setItem('userData', JSON.stringify(complete))
      localStorage.setItem('accessToken', JSON.stringify(data.data.token))
      localStorage.setItem('refreshToken', JSON.stringify(data.data.token))
  } catch (error) {

    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
    });
  }
};


export const SignupAction = (user_info) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json',
      },
    };
    // debugger
    const { data } = await axios.post(
      `${SERVER_IP}/api/v1/salons/register`,
      user_info,
      config
    );
    // debugger
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
    const completeInfo = {...data,ability:[
        {
          action: 'manage',
          subject: 'all'
        }
      ]}
    localStorage.setItem('userData', JSON.stringify(completeInfo))
    

  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload:
        error.response && error.response.data.error
    });
    
  }
};

export const forgotPasswordAction = (mobileNumber) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
       Accept: 'application/json',

    },
  };
  try {
    
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const { data } = await axios.post(
      `${SERVER_IP}/api/v1/users/forgotPassword`,
      mobileNumber,
      config
    );

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
              error.response && error.response.data.error

       
    });
  }
};


export const verifyPin = (otpCode) => async (dispatch) => {
  try {
    dispatch({
      type: VERIFY_OTP_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    await axios.post(`${SERVER_IP}/api/v1/users/verifyotp`, otpCode, config);
    dispatch({
      type: VERIFY_OTP_SUCCESS,
    });
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: VERIFY_OTP_FAIL,
      payload:
        error.response && error.response.data.error

    });
  }
};

export const ChangePasswordAction = (changedUser) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CHANGE_PASSWORD_REQUEST,
        Accept: 'application/json',
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
      await axios.put(
        `${SERVER_IP}/api/v1/users/resetpassword`,
        changedUser,
        config
      );

      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload:
                 error.response && error.response.data.error

      });
    }
  };

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT})

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem('userData')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
}
