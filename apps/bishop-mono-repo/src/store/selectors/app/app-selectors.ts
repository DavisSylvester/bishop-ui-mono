import { createSelector } from "@ngrx/store";
import { AppStore } from "../../interfaces/AppStore";

export const AppSelector = (state: AppStore) => {
  return state.App;
};

export const isLoadingSelector = createSelector(AppSelector, (state) => {

  console.log(state);
  return state.loading || false;


});
