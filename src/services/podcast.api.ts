import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const podcastApi = createApi({
  reducerPath: "podcastApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://itunes.apple.com/" }),
  endpoints: (builder) => ({
    getPodcast: builder.query<PodcastListResponse, number>({
      query: (limit) => ({
        method: "GET",
        url: `us/rss/toppodcasts/limit=${limit}/genre=1310/json`,
      }),
    }),
    getPodcastDetail: builder.query<PodcastResponse, string>({
      query: (podcastId) => ({
        method: "GET",
        url: `lookup?id=${podcastId}`,
      }),
    }),
  }),
});

export const { useGetPodcastQuery, useGetPodcastDetailQuery } = podcastApi;
