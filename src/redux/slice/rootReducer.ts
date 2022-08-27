import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;