import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
// import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    // categories: categoriesReducer,
  },

});

export default store;
