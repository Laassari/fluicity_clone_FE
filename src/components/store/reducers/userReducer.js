import { USER } from '../constants';

const initialState = {
  user: {},
  checkEmailExists: {
    loading: false,
    success: null,
    fail: null
  },
  login: {
    loading: false,
    success: null,
    fail: null
  }
};
export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case USER.CHECK_EMAIL_EXISTS_REQUEST:
      return {
        ...state,
        checkEmailExists: {
          loading: true,
          success: null,
          fail: null
        }
      };
    case USER.CHECK_EMAIL_EXISTS_SUCCESS:
      return {
        ...state,
        checkEmailExists: {
          loading: false,
          success: true,
          fail: null
        }
      };
    case USER.CHECK_EMAIL_EXISTS_FAIL:
      return {
        ...state,
        checkEmailExists: {
          loading: false,
          success: null,
          fail: false
        }
      };

    case USER.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          loading: true,
          success: true,
          fail: null
        }
      };
    case USER.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          loading: false,
          success: true,
          fail: null
        }
      };
    case USER.LOGIN_FAIL:
      return {
        ...state,
        login: {
          loading: false,
          success: null,
          fail: payload
        }
      };

    case USER.SET:
      return {
        ...state,
        user: payload
      };

    default:
      return state;
  }
}
