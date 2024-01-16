import { createStore } from "redux";
import { dogApiReducer } from "./Redux/reducers/dogreducer";

const store = createStore(dogApiReducer);

export default store;