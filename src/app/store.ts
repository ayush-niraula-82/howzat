import { configureStore } from "@reduxjs/toolkit";
import { matchApi } from "../services/MatchApi";
import { rankingApi } from "../services/RankingApi";
import { statApi } from "../services/StatApi";

const store = configureStore({
    reducer: {
        [matchApi.reducerPath]: matchApi.reducer,
        [rankingApi.reducerPath]:rankingApi.reducer,
        [statApi.reducerPath]:statApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matchApi.middleware, rankingApi.middleware, statApi.middleware),
});

export default store;
