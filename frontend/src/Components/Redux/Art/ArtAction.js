import axios from "../../utils/axios";

export const ART_ACTION_TYPES = {
  FETCHING: "ARTS/FETCHING",
  ART_FETCH_SUCCESS: "ARTS/ART_FETCH_SUCCESS",
  ART_FETCH_FAILED: "ARTS/ART_FETCH_FAILED",
  ART_SEND_SUCCESS: "ARTS/ART_SEND_SUCCESS",
  ART_SEND_FAILED: "ARTS/ART_SENT_FAILED",
};

export const onFetching = () => {
  return {
    type: ART_ACTION_TYPES.FETCHING,
  };
};

export const artFetchSuccess = (data) => {
  return {
    type: ART_ACTION_TYPES.ART_FETCH_SUCCESS,
    payload: data,
  };
};

export const artFetchFailed = (error) => {
  return {
    type: ART_ACTION_TYPES.ART_FETCH_FAILED,
    payload: error,
  };
};

export const artSendSuccess = () => {
  return {
    type: ART_ACTION_TYPES.ART_SEND_SUCCESS,
  };
};

export const artSendFailed = (error) => {
  return {
    type: ART_ACTION_TYPES.ART_SEND_FAILED,
    payload: error,
  };
};

export const onFetchingArt = () => {
  return (dispatch) => {
    dispatch(onFetching());
    axios
      .get("http://localhost:5000/artist/arts")
      .then((res) => {
        if (res.status === 200) {
          dispatch(artFetchSuccess(res.data));
        } else {
          dispatch(artFetchFailed(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



export const onAddingArt = (file, artData) => {
  // console.log(file);
  // console.log(artData);

  let data = new FormData();
  data.append("art", file);

  Object.keys(artData).forEach((key) => {
    data.append(key, artData[key]);
  });

  return (dispatch) => {
    dispatch(onFetching());
    axios
      .post(`http://localhost:5000/artist/arts`, data)
      .then((res) => {
        console.log(res);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
