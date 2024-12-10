// memoizes the selectors
import { createSelector } from "reselect";

// memoization = cache the previous value of something so that if the input has not changed
// then you just return back the same output. This is works when you have a pure function
const selectCategoryReducer = (state) => state.categories;

// memoized selector
export const selectCategories = createSelector(
  [selectCategoryReducer], // input selector (can have multiple with corresponding second parameters in output array) - slices of redux needed to produce something new outside
  (categoriesSlice) => categoriesSlice.categories // output array - argument received from output of input selector
);

// memoized selector - as long as the categories array does not change, do not run this function
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
