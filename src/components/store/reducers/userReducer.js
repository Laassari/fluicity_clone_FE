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
  },
  signup: {
    loading: false,
    success: null,
    fail: null
  },
  authModalOpen: false
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
          fail: payload
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

    case USER.SIGNUP_REQUEST:
      return {
        ...state,
        signup: {
          loading: true,
          success: null,
          fail: null
        }
      };
    case USER.SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loading: false,
          success: true,
          fail: null
        }
      };
    case USER.SIGNUP_FAIL:
      return {
        ...state,
        signup: {
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

    case USER.AUTH_MODAL_OPEN:
      return {
        ...state,
        authModalOpen: payload
      };

    default:
      return state;
  }
}
