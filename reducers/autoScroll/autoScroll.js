import { createSlice } from "@reduxjs/toolkit";






const initialState = {
    value: 0,
    status: 'idle',
};

  
export const autoScrollSlice = createSlice({
    name: 'autoScroll',
    initialState,
   
    reducers: {
      scrollDown: (state) => {
       if(state.value >= 0 && state.value < 1){ 
        state.value += 1;
       } 
      },

      scrollUp: (state) => {
        if(state.value === 1){ 
         state.value -= 1;
        } 
       },
    }  
    
});



export const selectScroll = (state) => state.autoScroll.value;

export const { scrollDown, scrollUp } = autoScrollSlice.actions;


export default autoScrollSlice.reducer;