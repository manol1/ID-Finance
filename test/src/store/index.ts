import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";

const rootReducer = combineReducers({
  step: stepReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
