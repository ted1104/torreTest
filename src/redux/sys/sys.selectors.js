import { createSelector } from "reselect";
const Sys = (state) => state.sys;

export const selectSysMenu = createSelector([Sys], (sys) => sys.showMenu);
export const selectDetails = createSelector([Sys], (sys) => sys.details);
