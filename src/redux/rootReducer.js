import { createSlice } from "@reduxjs/toolkit";
import { STAFFS,DEPARTMENTS } from "../data/staffs";

export default createSlice({
    name: 'data',
    initialState: {
        staffs: STAFFS,
        departments: DEPARTMENTS,
        search:'',

    },
    reducers: {
        addStaff: (state, action) => {
            state.staffs.push(action.payload);
        },//action creator
        search: (state, action) => {
            state.search =action.payload
        }
        
    }
})