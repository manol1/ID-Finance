import { Step } from "./../../models";
import { createSlice } from "@reduxjs/toolkit";

interface IStepState {
  step: Step;
}

const initialState: IStepState = {
  step: Step.One,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    stepTwo(state) {
      state.step = Step.Two;
    },
  },
});

export const { stepTwo } = stepSlice.actions;

export default stepSlice.reducer;
