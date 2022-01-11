import { sysType } from "./sys.type";
const INITIAL_STATE = {
  showMenu: false,
};

const sysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sysType.SET_DISPLAY_MENU:
      return {
        ...state,
        ShowMenu: action.payload,
      };
    default:
      return state;
  }
};

export default sysReducer;
