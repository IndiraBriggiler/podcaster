import React, { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Card, Divider, Flex, Text } from "theme-ui";
import {
  useGetPodcastDetailQuery,
  useGetAllPodcastQuery,
  // useGetEpisodesQuery,
} from "../../services/podcast.api";

import { EpisodesData } from "./episodesData";

import { PodcastDetail } from "../../shared/podcast-detail";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

export const Podcast: FC = () => {
  const navigate = useNavigate();

  // const QUANTITY = 100;

  // let location = useLocation();

  // const podcastId = location.pathname.split("/")[2];

  // const {
  //   data: podcastListData,
  //   isLoading: isLoadingPodcastListData,
  // } = useGetAllPodcastQuery(QUANTITY);

  // const {
  //   data: podcastData,
  //   isLoading: isLoadingPodcastData,
  // } = useGetPodcastDetailQuery(podcastId, {
  //   skip: !podcastId,
  // });

  // const podcastList = podcastListData?.feed?.entry;

  // const podcast = podcastList?.find(
  //   (podcast: Podcast) => podcast.id?.attributes?.["im:id"] === podcastId
  // );

  // const podcastAlone = podcastData?.results?.[0];

  // const episodesList = podcastList?.filter(
  //   (podcast: Podcast) => podcast.id?.attributes?.["im:id"] === podcastId
  // );

  // const { data: episodesData, isLoading: isLoadingEpisodesData } =
  //   useGetEpisodesQuery(podcastId, {
  //     skip: !podcastId,
  //   });

  let location = useLocation();

  const podcastId = location.pathname.split("/")[2];

  const episodesList = EpisodesData?.feed?.results;

  const handleEpisodeClick = (episodeId: string) => {
    navigate(`podcast/${podcastId}/episode/${episodeId}`);
  };

  //agregar lógica
  const isLoading = false;

  return (
    <Flex sx={{ p: "20px", justifyContent: "space-between" }}>
      <PodcastDetail />
      {isLoading ? (
        <Box sx={{ width: "75%" }}>
          <Card sx={{ fontWeight: "bold", mb: "20px", fontSize: "4" }}>
            <Skeleton />
          </Card>
          <Card sx={{ p: "15px" }}>
            <Skeleton count={15} />
          </Card>
        </Box>
      ) : (
        <Box sx={{ width: "75%" }}>
          <Card sx={{ fontWeight: "bold", mb: "20px", fontSize: "4" }}>
            <Text>{`Episodes: ${episodesList?.length}`}</Text>
          </Card>
          <Card sx={{ p: "15px" }}>
            <Box as="table" sx={{ width: "100%", borderCollapse: "collapse" }}>
              <Box as="tr" sx={{ fontWeight: "bold", height: "40px" }}>
                <Box as="th" sx={{ textAlign: "start", p: "15px" }}>
                  Title
                </Box>
                <Box
                  as="th"
                  sx={{
                    textAlign: "start",
                  }}
                >
                  Date
                </Box>
                <Box
                  as="th"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Duration
                </Box>
              </Box>
              {episodesList?.map((episode, index) => (
                <Box
                  as="tr"
                  key={index}
                  sx={{
                    height: "40px",
                    borderTop: "1px solid #F1F1F1",
                    "&:nth-child(even)": { backgroundColor: "lightblue" },
                  }}
                  onClick={() => handleEpisodeClick(episode?.id)}
                >
                  <Box
                    as="td"
                    sx={{
                      p: "15px",
                      width: "800px",
                      maxWidth: "800px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "primary",
                    }}
                  >{`${episode?.artistName} - ${episode?.name}`}</Box>
                  <Box as="td">
                    {" "}
                    {moment(episode?.releaseDate).format("l")}{" "}
                  </Box>
                  <Box as="td" sx={{ textAlign: "center" }}>
                    {episode?.duration}
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      )}
    </Flex>
  );
};
