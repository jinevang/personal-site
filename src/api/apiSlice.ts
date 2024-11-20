// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const drinkSheet = process.env.REACT_APP_DRINK_SHEET_KEY;

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
