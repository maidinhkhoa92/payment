import actions from './actions';

const initialState = {
  payment: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PAYMENT_SUCCESS:
      return { ...state, payment: action.payload };
    default:
      return state;
  }
};
