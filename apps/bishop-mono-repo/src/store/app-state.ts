import { AppStore } from "./interfaces/AppStore";

export const AppState: AppStore = {
  App: {
    get loading(){
      return (this.activeHttpRequests !== 0) ? true : false;
    },
    activeHttpRequests: 0,
  }
};
