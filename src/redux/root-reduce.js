import { combineReducers } from "redux";
import sysReducer from "./sys/sys.reduce";

//REDUX PERSISIT
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // for sessionStorage
//import storage from "redux-persist/lib/storage"; //for localStorage

const persistorConfig = {
  key: "root",
  storage,
  whitelist: ["sys"],
};

const rootReducer = combineReducers({
  sys: sysReducer,
});

export default persistReducer(persistorConfig, rootReducer);
