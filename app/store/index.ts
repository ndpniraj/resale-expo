import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";

const reducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;

export default store;
