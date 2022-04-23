import axios from 'axios';
import { SERVER_IP } from '../../configs/env.js';
import { CATEGORY_ADD_REQUEST, 
    CATEGORY_ADD_SUCCESS, CATEGORY_ADD_FAIL } from '../constants/categoryConstants.js';


    export const addCategory = (category) => async (dispatch) => {
        try {
          dispatch({
            type:  CATEGORY_ADD_REQUEST,
            Accept: 'application/json',
          });
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          }; debugger
            const {data} =  await axios.post(
            `${SERVER_IP}/api/v1/category/create`,
            category,
            config
          );
            debugger
          dispatch({
            type: CATEGORY_ADD_SUCCESS,
            payload : data,
          });
        } catch (error) {   
          console.log(error)
          debugger
          dispatch({
            type: CATEGORY_ADD_FAIL,
            payload:
                     error.response && error.response.data.error
    
          });
        }
      };

