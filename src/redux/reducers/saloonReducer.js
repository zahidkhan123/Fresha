// import {SALOON_SIGNUP_REQUEST,
// SALOON_SIGNUP_SUCCESS,
// SALOON_SIGNUP_FAIL,BRANCH_SIGNUP_REQUEST,
// BRANCH_SIGNUP_SUCCESS,
// BRANCH_SIGNUP_FAIL   } from "../constants/saloonConstants.js"

// export const SaloonSignupReducer = (state = {}, action) => {
//   switch (action.type) {
//     case SALOON_SIGNUP_REQUEST:
//       return{loading : true };
//       case SALOON_SIGNUP_SUCCESS:
//         return { loading: false ,success:true,SaloonInfo:action.payload};
//     case SALOON_SIGNUP_FAIL:
//       return { loading: false,success:false, error: action.payload };
//     default:
//       return state
//   }
// }

// export const BranchSignupReducer = (state = {}, action) => {
//   switch (action.type) {
//     case BRANCH_SIGNUP_REQUEST:
//       return{loading : true };
//       case BRANCH_SIGNUP_SUCCESS:
//         return { loading: false ,BranchInfo:action.payload};
//     case BRANCH_SIGNUP_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state
//   }
// }