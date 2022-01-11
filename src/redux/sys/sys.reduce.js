import { sysType } from "./sys.type";
const INITIAL_STATE = {
  showMenu: false,
  details: {
    title_skill: "",
    proficient: "",
  },
};

const sysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sysType.SET_DISPLAY_MENU:
      return {
        ...state,
        showMenu: action.payload.showMenu,
        details: action.payload.details,
      };
    default:
      return state;
  }
};

export default sysReducer;
