import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./asset/assetReducer";

const store = createStore(reducer, composeWithDevTools());

export default store;
