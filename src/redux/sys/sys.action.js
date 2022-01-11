import { sysType } from "./sys.type";
export const setDisplay = (data) => ({
  type: sysType.SET_DISPLAY_MENU,
  payload: data,
});
