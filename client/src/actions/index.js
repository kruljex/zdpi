import axios from "axios";

export const selectService = (name) => {
  return {
    type: "SELECTED_SERVICE",
    payload: name,
  };
};

const url = "https://glacial-escarpment-21954.herokuapp.com";

export const sendEmail = (name, email, message) => async (dispatch) => {
  const res = await axios.post(`${url}/api/mail/send`, {
    sender: email,
    subject: name,
    text: message,
  });
  dispatch({ type: "SEND_EMAIL", payload: res.data });
};

export const sendData = (email, data) => async (dispatch) => {
  const res = await axios.post(`${url}/api/konfiguracija/write`, {
    email,
    data,
  });
  dispatch({ type: "SEND_DATA", payload: res.data });
};
