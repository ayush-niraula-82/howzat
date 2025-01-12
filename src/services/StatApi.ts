import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const statApiHeader={
'x-rapidapi-key': '3395607156msh620d0bc9a7610bcp1d6236jsn596caabdc4ee',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
}

export const statApi = createApi({
    reducerPath:'statApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://cricbuzz-cricket.p.rapidapi.com'

    }),
    endpoints:(builder)=>({
        getStat : builder.query({
            query: () =>
                createRequest(`/stats/v1/topstats`),
            }),
        getRecords: builder.query({
            query: ({ statsType, matchType }: { statsType: any; matchType: any }) =>  createRequest(`/stats/v1/topstats/0?statsType=${statsType}&matchType=${matchType}`)
        })
        })
    })


const createRequest = (url:string) =>({
    url, headers:statApiHeader
})

export const {useGetStatQuery, useGetRecordsQuery} = statApi;
