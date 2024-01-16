import { API } from "../Actions/";

const initialState = {
  api: "dogs",
};

export const dogApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API:
      return {
        ...state,
        api: action.payload.api,
      };
    default:
      return state;
  }
};