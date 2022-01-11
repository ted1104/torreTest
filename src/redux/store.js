import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReduce from "./root-reduce";

//REDUX PERSIST
import { persistStore } from "redux-persist";

const middlewares = [];
// if (process.env.REACT_APP_NODE_ENV === "development") {
//this for display logger in console when we are developping
middlewares.push(logger);
// }

const store = createStore(rootReduce, applyMiddleware(...middlewares));
const persistor = persistStore(store); //creating persisit object redux of our sotre

export { store, persistor };
