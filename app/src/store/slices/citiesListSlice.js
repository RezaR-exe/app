import { createSlice } from "@reduxjs/toolkit";
import { fetchCityWeatherInfo } from "../thunks/cityThunk";


const citySlice = createSlice({
    name: "city",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
   extraReducers(builder) {
    builder.addCase(fetchCityWeatherInfo.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchCityWeatherInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchCityWeatherInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });
   }
});



export const { addCity, removeCity } = citySlice.actions;
export default citySlice.reducer;

