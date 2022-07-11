import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


const store = configureStore({
  reducer: {
    store: rootReducer.reducer 
  },
});

export default store