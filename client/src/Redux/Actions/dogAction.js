import { API } from "./";

const addApi = (api) => {
  return {
    type: API,
    payload: { api },
  };
};

export { addApi };