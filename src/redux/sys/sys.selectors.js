import { createSelector } from "reselect";
const Sys = (state) => state.sys.showMenu;

export const selectSysMenu = createSelector([Sys], (sys) => sys);
