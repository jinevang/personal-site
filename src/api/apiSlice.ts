import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'AIzaSyDyEdHgCS_mmpMCmtK0fMhIoE1XenSDBDQ';
const drinkSheet = '17ZyIov4ENVo0Xdk7xP4i8hohR6S1ovT62JbwC1R7KUU';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets',
	}),
  endpoints: (builder) => ({
    getPlaces: builder.query({
      query: () => `/${drinkSheet}/values/Place%20Ratings?key=${apiKey}`, // API endpoint
    }),
    getLocationRatingsByName: builder.query({
			query: (placeName: string | string[]) => {

				let places = '';
				if (Array.isArray(placeName)) {
					places = placeName.join('&ranges=');
					places = '?ranges=' + places;
				}
				else {
					places = `?range=${placeName}`
				}

				return `/${drinkSheet}/values:batchGet/${places}&key=${apiKey}`
			},
		}),
  }),
});

export const { useGetPlacesQuery, useGetLocationRatingsByNameQuery } = apiSlice;
