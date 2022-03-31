import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk";

import vocas from "./modules/vocas";

const middlewares = [thunk];
const rootReducer = combineReducers({vocas});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;