import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    artistObject:{},
  };

  export const artistSlice=createSlice({
      name:"artist",
      initialState,
      reducers:{
        addArtist:(state,action)=>{
            state.artistObject=action.payload
        },
        
       
      },
      extraReducers:{}
  })
  export const { addArtist} = artistSlice.actions;
  export default artistSlice.reducer

