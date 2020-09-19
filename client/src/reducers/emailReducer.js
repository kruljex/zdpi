export default (state = {}, action) => {
  switch (action.type) {
    case "SEND_EMAIL":
      return { ...state, email: action.payload };
    case "SEND_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
