import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rankingApiHeader={
    'x-rapidapi-key': '3395607156msh620d0bc9a7610bcp1d6236jsn596caabdc4ee',
	'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
}

export const rankingApi = createApi({
    reducerPath:'rankingApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://cricbuzz-cricket.p.rapidapi.com'
    }),
    endpoints: (builder) => ({
        getIccRanking: builder.query({ 
          query: ({ playerType, formatType }: { playerType: string; formatType: string }) =>
            createRequest(`/stats/v1/rankings/${playerType}?formatType=${formatType}`),
        }),
      }),
      
})

const createRequest=(url:string)=>({
    url, headers:rankingApiHeader
})

export const { useGetIccRankingQuery } = rankingApi;
