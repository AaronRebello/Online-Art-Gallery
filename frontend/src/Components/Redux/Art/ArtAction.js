
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
    type:  ART_ACTION_TYPES.ART_FETCH_SUCCESS,
    payload: data,
  };
};

export const artFetchFailed = (error) => {
  return {
    type:  ART_ACTION_TYPES.ART_FETCH_FAILED,
    payload: error,
  };
};

export const artSendSuccess =()=>{
    return{
        type: ART_ACTION_TYPES.ART_SEND_SUCCESS,

    }
}

export const artSendFailed =(error)=>{
    return{
        type: ART_ACTION_TYPES.ART_SEND_FAILED,
        payload:error,
    }
}
