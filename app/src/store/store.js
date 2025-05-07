import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./slices/citiesListSlice";


const store = configureStore({
    reducer: {
        city: citySlice
    }
});


export default store;
export * from "./thunks/cityThunk";

