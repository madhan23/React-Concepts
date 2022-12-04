export const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_UPDATE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "TAGS":
      const data = action.payload.value.split(",");
      return {
        ...state,
        tags: data,
      };

    case "QTY_INC": {
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    }
    case "QTY_DEC":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case "RESET":
      return INITIAL_STATE;

    default:
      return state;
  }
};
export const INITIAL_STATE = {
  username: "",
  email: "",
  mobileNumber: "",
  category: "",
  tags: [],
  quantity: 0,
};
