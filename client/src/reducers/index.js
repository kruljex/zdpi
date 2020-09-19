import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";
import emailReducer from "./emailReducer";

export default combineReducers({
  services: servicesReducer,
  email: emailReducer,
});
