import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Routine, Completion} from '../../../types/routine';


interface RoutineState {
    routines:Routine[]
    completions: Completion[]
}

const initialState: RoutineState={
    routines:[],
    completions:[]
}

const routineSlice= createSlice({
    name:'routines',
    initialState,
    reducers:{
        addRoutine:(state,action: PayloadAction<Completion>)=>{
            state.completions.push(action.payload) 
        },
        toggleRoutine:(state,action:PayloadAction<Completion>)=>{
            const index= state.completions.findIndex(routine=>routine.date===action.payload.date)
            if(index>=0){
                state.completions.slice(index,1)
            }else{
                state.completions.push(action.payload);
            }
        }
    },
})



export default routineSlice.reducer;
export const {addRoutine, toggleRoutine}= routineSlice.actions