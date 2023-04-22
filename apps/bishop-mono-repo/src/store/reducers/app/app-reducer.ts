import { createReducer, on } from "@ngrx/store";
import * as AppActions from "../../actions/app/app-actions";
import { AppState } from "../../app-state";
import { AppStore } from "../../interfaces/AppStore";


const fetchingDataReducer = (state: AppStore) => {

  const currentHttpRequest = state.App.activeHttpRequests + 1;
  return {
    ...state,
    App: {
      activeHttpRequests: currentHttpRequest,
      loading: (currentHttpRequest && currentHttpRequest > 0) ? true : false,
    }

  };
}

const activeHttpRequestDecreaserReducer = (state: AppStore) => {
  const currentHttpRequest = ((state.App.activeHttpRequests - 1) <= 0) ? 0 : state.App.activeHttpRequests - 1;
  return {
    ...state,
    App: {
      activeHttpRequests: currentHttpRequest,
      loading: (currentHttpRequest > 0) ? true : false,
    }

  };
}


export const appReducer = createReducer(AppState,
  on(AppActions.fetchingData, fetchingDataReducer),
  on(AppActions.fetchingDataSuccess, activeHttpRequestDecreaserReducer),
  on(AppActions.fetchingDataFailed, activeHttpRequestDecreaserReducer)
  );
