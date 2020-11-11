import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const AUTH_ACTION_TYPES = {
  ON_REGISTER_SUCCESS: "AUTH/ON_REGISTER_SUCCESS",
  ON_REGISTER_FAILURE: "AUTH/ON_REGISTER_FAILURE",
  ON_LOGIN_SUCCESS: "AUTH/ON_LOGIN_SUCCESS",
  ON_LOGIN_FAILURE: "AUTH/ON_LOGIN_FAILURE",
};

export const onRegisterSuccess = () => {
  return {
    type: AUTH_ACTION_TYPES.AUTH_REGISTER_SUCCESS,
  };
};

export const onRegisterFailure = (msg) => {
  return {
    type: AUTH_ACTION_TYPES.ON_REGISTER_FAILURE,
    payload: msg,
  };
};

export const onLoginSuccess = (user) => {
  return {
    type: AUTH_ACTION_TYPES.ON_LOGIN_SUCCESS,
    payload: user,
  };
};

export const onLoginFailure = (msg) => {
  return {
    type: AUTH_ACTION_TYPES.ON_LOGIN_FAILURE,
    payload: msg,
  };
};

export const onRegister = (userData, history) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/register`, userData)
      .then((res) => {
        if (res.status === 200) {
          dispatch(onRegisterSuccess());
          history.push("/");

        } else {
          console.log(res.status);

        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(onRegisterFailure());
      });
  };
};

export const onLogin =(data,history)=>{
  return dispatch=>{
    axios.post(`http://localhost:5000/login`,data).then(res=>{
      if(res.status === 200){
        const { token } = res.data 
        setAuthToken(token)
        localStorage.setItem('jwtToken',token)
        const decoded = jwt_decode(token) 
        // console.log(decoded)
        dispatch(onLoginSuccess(decoded))
        history.push('/art')
      }
    })
  }
}