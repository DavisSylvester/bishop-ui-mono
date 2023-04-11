import { createAction } from "@ngrx/store";

export const fetchingData = createAction('[APP] FETCHING DATA');
export const fetchingDataSuccess = createAction('[APP] FETCHING DATA - SUCCESS')
export const fetchingDataFailed = createAction('[APP] FETCHING DATA - FAILURE')

