import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import  artistSlice  from './artistSlice/artistSlice';
import functionSlice from './functionSlice/functionSlice';



export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    artist:artistSlice,
    func:functionSlice
  },
});
