import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// fetchCategoriesAsync saga
export function* fetchCategoriesAsync() {
  try {
    // a side effect
    // call(method, methodParameters)
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");

    // like dispatch, generates an action
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

// generator function
export function* onFetchCategories() {
  // if you hear a bunch of actions, give me the latest one
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  // an effect that says run everything inside all() and only complete when it's done
  // listen to onFetchCategories saga inside the categories saga aggregator
  yield all([call(onFetchCategories)]);
}
