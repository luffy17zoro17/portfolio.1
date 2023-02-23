import { configureStore } from '@reduxjs/toolkit';
import autoScrollReducer from '../reducers/autoScroll/autoScroll';
import blurReducer from '../reducers/blur/blurSlice';


export const store = configureStore({
  reducer: {
    blurMode: blurReducer,
    autoScroll: autoScrollReducer,
  },
});
