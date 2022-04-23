// import axios from "axios";
// import { SERVER_IP } from "../../configs/env.js";
// import {SALOON_SIGNUP_REQUEST,
// SALOON_SIGNUP_SUCCESS,
// SALOON_SIGNUP_FAIL,BRANCH_SIGNUP_REQUEST,
// BRANCH_SIGNUP_SUCCESS,
// BRANCH_SIGNUP_FAIL   } from "../constants/saloonConstants.js"


// export const SalonSignupAction = (Saloon_info) => async (dispatch) => {
//   try {
//     dispatch({
//       type: SALOON_SIGNUP_REQUEST,
//     });
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//          Accept: 'application/json',

//       },
//     };
//     const Saloon={salonName:Saloon_info.salonName}
//    debugger
//     const { data } = await axios.post(
//       `${SERVER_IP}/api/v1/salons/create`,
//       Saloon,
//       config
//       );
//       const Branch={
//         id:data ? data.id :null,
//         address:Saloon_info.address,
//         contactNumber: Saloon_info.contactNumber
//       }
//     dispatch(BranchSignupAction(Branch))
      
//       dispatch({
//         type: SALOON_SIGNUP_SUCCESS,
//         payload: data,
//       });
      
//       console.log(data)
//     debugger;

//   } catch (error) {
//     // console.log(error)
//     debugger
//     dispatch({
//       type: SALOON_SIGNUP_FAIL,
//       payload:
//         error.response && error.response.data.status.message
//           ? error.response.data.status.message
//           : error.message,
//     });
//   }
// };

// export const BranchSignupAction = (Branch_info) => async (dispatch) => {
//   try {
//     dispatch({
//       type: BRANCH_SIGNUP_REQUEST,
//     });
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//          Accept: 'application/json',

//       },
//     };
  
//     const { data } = await axios.post(
//       `${SERVER_IP}/api/v1/branches/create`,
//       Branch_info,
//       config
//     );
  
//     dispatch({
//       type: BRANCH_SIGNUP_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     // console.log(error);
//     debugger
//     dispatch({
//       type: BRANCH_SIGNUP_FAIL,
//       payload:
//         error.response && error.response.data.status.message
//           ? error.response.data.status.message
//           : error.message,
//     });
//   }
// };