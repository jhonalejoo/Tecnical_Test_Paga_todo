import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    getBanks: {
        banks: [],
        hasError: false,
        isLoading: false
    }
}
export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        getBanksLoading: (state) => {
            state.getBanks.isLoading = true;
        },
        getBanksSuccess: (state,action) => {
            state.getBanks.isLoading = false;
            state.getBanks.banks = action.payload;
        },
        getBanksErrors: (state) => {
            state.getBanks.isLoading = false;
            state.getBanks.hasError = true;
        }
    }
})

export const {
    getBanksLoading,
    getBanksSuccess,
    getBanksErrors
} = bankSlice.actions;

export default bankSlice.reducer;