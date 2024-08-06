// import { createAction, createReducer } from "@reduxjs/toolkit";


// const initialState = {
//     count: 10
// };

// // Create actions with more descriptive names
// export const incrementCount = createAction('incrementCount');
// export const decrementCount = createAction('decrementCount');
// export const incrementCountByValue = createAction('incrementCountByValue');
// export const decrementCountByValue = createAction('decrementCountByValue');

// export const customReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(incrementCount, (state) => {
//             state.count += 1;
//         })
//         .addCase(incrementCountByValue, (state, action) => {
//             state.count += action.payload;
//         })
//         .addCase(decrementCount, (state) => {
//             state.count -= 1;
//         })
//         .addCase(decrementCountByValue, (state, action) => {
//             state.count -= action.payload;
//         });
// });

// ---------------------------------------------------- another ways -------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.count += 1;
        },
        decrementCount: (state) => {
            state.count -= 1;
        },
        incrementCountByValue: (state, action) => {
            state.count += action.payload;
        },
        decrementCountByValue: (state, action) => {
            state.count -= action.payload;
        }
    }
});

export const { incrementCount, decrementCount, incrementCountByValue, decrementCountByValue } = counterSlice.actions;

export default counterSlice.reducer;