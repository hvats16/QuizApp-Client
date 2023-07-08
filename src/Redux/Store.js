import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questions_reducers";
import { resultReducer } from "./result_reducer";

// call reducers
const rootReducer = combineReducers({
	questions: questionReducer,
	results: resultReducer,
});

// create store with reducers

export default configureStore({
	reducer: rootReducer,
});
