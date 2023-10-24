import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
        toggleDarkMode: state => {
            return !state;
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = state => state.darkMode;
export default darkModeSlice.reducer;