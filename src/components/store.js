import { applyMiddleware } from "redux";
import createStore from "create-store";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools/extension";

import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;