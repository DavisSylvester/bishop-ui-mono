import { AppStore } from "./interfaces/AppStore";

export const AppState: AppStore = {
  App: {
    loading: false,
    activeHttpRequests: 0,
  }
};
