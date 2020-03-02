import { POST } from '../constants';

const initialState = {
  postCreate: {
    loading: false,
    success: null,
    fail: null
  },
  content: null
};
export default function post(state = initialState, { type, payload }) {
  switch (type) {
    case POST.CREATE_REQUEST:
      return {
        ...state,
        postCreate: {
          loading: true,
          success: null,
          fail: null
        }
      };
    case POST.CREATE_SUCCESS:
      return {
        ...state,
        postCreate: {
          loading: false,
          success: true,
          fail: null
        }
      };
    case POST.CREATE_FAIL:
      return {
        ...state,
        postCreate: {
          loading: false,
          success: null,
          fail: payload
        }
      };

    case POST.SET:
      return {
        ...state,
        content: payload
      };

    default:
      return state;
  }
}
