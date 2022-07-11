import { createSlice } from "@reduxjs/toolkit";
import { STAFFS,DEPARTMENTS } from "../data/staffs";

export default createSlice({
    name: 'data',
    initialState: {
        staffs: STAFFS,
        departments: DEPARTMENTS,
        columns: "col-sm-4",

    },
    reducers: {
        addStaff: (state, action) => {
            state.staffs.push(action.payload);
        },//action creator
        
    }
})