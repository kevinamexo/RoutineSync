import { configureStore } from "@reduxjs/toolkit";
import routineReducer  from "./features/routines/routineSlice"

export const store = configureStore({
    reducer:{
        routines:routineReducer
    }
})

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch