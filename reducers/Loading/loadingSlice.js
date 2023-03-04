


import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    value: 0,
   
};

  
export const loadingSlice = createSlice({
    name: 'loadMode',
    initialState,

    reducers: {
      loadChange: (state) => {
       if(state.value===0){ 
        state.value = 1;   
       }  
      }  
    }
});



export const selectLoading = (state) => state?.loadMode?.value;

export const { loadChange } = loadingSlice.actions;


export default loadingSlice.reducer;