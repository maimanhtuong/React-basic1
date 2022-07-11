import { createSelector } from "reselect";

export const staffsSelector = (state) => state.store.staffs;
export const departmentSelector = (state) => state.store.departments;
export const searchSelector = (state) => state.store.search;

export const staffsRemainingSelector = createSelector(
  staffsSelector,
  searchSelector,
  (staffs, search) => {
    return staffs.filter((staff) =>
      staff.name.toLowerCase().includes(search.toLowerCase())
    );
  }
);
