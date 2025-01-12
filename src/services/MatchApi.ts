

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



const matchApiHeader = {
    'x-rapidapi-key': '3395607156msh620d0bc9a7610bcp1d6236jsn596caabdc4ee',
    'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
}

export const matchApi= createApi({
    reducerPath:'matchApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://cricbuzz-cricket.p.rapidapi.com',
    }),
    endpoints:(builder)=>({
        getMatchInformation: builder.query({
            query: () => createRequest('/matches/v1/recent'),
          }),
    })
})


const createRequest=(url:string)=>({url, headers:matchApiHeader})

export const {useGetMatchInformationQuery}=matchApi;