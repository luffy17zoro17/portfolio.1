import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    value: 0,
   
};

  
export const blurSlice = createSlice({
    name: 'blurMode',
    initialState,

    reducers: {
      blurChange: (state) => {
       if(state.value===0){ 
        state.value = 1;   
      }
      }  
    }
});



export const selectBlur = (state) => state?.blurMode?.value;

export const { blurChange } = blurSlice.actions;


export default blurSlice.reducer;