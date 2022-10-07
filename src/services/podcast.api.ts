import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const podcastApi = createApi({
  reducerPath: "podcastApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://itunes.apple.com/" }),

  // baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7433/" }),

  // baseQuery: fetchBaseQuery({ baseUrl: process.env.ENDPOINT_PODCASTER }),

  endpoints: (builder) => ({
    getAllPodcast: builder.query<PodcastListResponse, number>({
      query: (limit) => ({
        method: "GET",
        url: `us/rss/toppodcasts/limit=${limit}/genre=1310/json`,
      }),
    }),
    getPodcastDetail: builder.query<unknown, string>({
      query: (podcastId) => ({
        method: "GET",
        url: `lookup?id=${podcastId}`,
      }),
    }),
    // getEpisodes: builder.query<Episodes, string>({
    //   query: (podcastId) => ({
    //     method: "GET",
    //     url: `lookup?id=${podcastId}/episodes`,
    //   }),
    // }),
    // getEpisode: builder.query<Episode, GetEpisodesRequest>({
    //   query: ({ podcastId, episodeId }) => ({
    //     method: "GET",
    //     url: `lookup?id=${podcastId}/episode/${episodeId}`,
    //   }),
    // }),
  }),
});

export const {
  useGetAllPodcastQuery,
  useGetPodcastDetailQuery,
  // useGetEpisodesQuery,
  // useGetEpisodeQuery,
} = podcastApi;
