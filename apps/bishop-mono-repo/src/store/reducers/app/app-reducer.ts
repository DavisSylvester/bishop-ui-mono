import { createReducer, on } from "@ngrx/store";
import * as AppActions from "../../actions/app/app-actions";
import { AppState } from "../../app-state";
import { AppStore } from "../../interfaces/AppStore";


const fetchingDataReducer = (state: AppStore) => {
  return {
    ...state,
    App: {
      // ...state.App,
      activeHttpRequests: state.App.activeHttpRequests + 1,
      loading: true
    }

  };
}

const activeHttpRequestDecreaserReducer = (state: AppStore) => {
  return {
    ...state,
    App: {
      ...state.App,
      activeHttpRequests: state.App.activeHttpRequests - 1,
    }

  };
}


export const appReducer = createReducer(AppState,
  on(AppActions.fetchingData, fetchingDataReducer),
  on(AppActions.fetchingDataSuccess, activeHttpRequestDecreaserReducer),
  on(AppActions.fetchingDataFailed, activeHttpRequestDecreaserReducer)
  );
