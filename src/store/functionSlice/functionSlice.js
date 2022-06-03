import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    functionObject:{},
  };

  export const functionSlice=createSlice({
      name:"functions",
      initialState,
      reducers:{
        addFunction:(state,action)=>{
            state.functionObject=action.payload
        },
    },
      extraReducers:{}
  })
  export const { addFunction} = functionSlice.actions;
  export default functionSlice.reducer


