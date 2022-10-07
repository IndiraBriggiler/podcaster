import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Flex, Text } from "theme-ui";
//Agregarlo cuando funcione la api
// import {
//   useGetPodcastDetailQuery,
//   useGetAllPodcastQuery,
// } from "../../services/podcast.api";
// import { useLocation } from "react-router-dom";

import { EpisodesData } from "./episodesData";

import { PodcastDetail } from "../../shared/podcast-detail";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

export const Podcast: FC = () => {
  const navigate = useNavigate();

  //agregarlo cuando funcione la api, al igual que el loading
  // let location = useLocation();
  // const podcastId = location.pathname.split("/")[2];

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 500);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const episodesList = EpisodesData?.feed?.results;

  const handleEpisodeClick = (episodeId: string) => {
    navigate(`episode/${episodeId}`);
  };

  return (
    <Flex sx={{ p: 4, justifyContent: "space-between" }}>
      <PodcastDetail />
      {isLoading ? (
        <Box sx={{ width: "75%" }}>
          <Card sx={{ mb: "20px" }}>
            <Skeleton />
          </Card>
          <Card sx={{ p: "15px" }}>
            <Skeleton count={15} />
          </Card>
        </Box>
      ) : (
        <Box sx={{ width: "75%" }}>
          <Card sx={{ fontWeight: "bold", mb: 3 }}>
            <Text variant="h3">{`Episodes: ${episodesList?.length}`}</Text>
          </Card>
          <Card sx={{ p: "15px" }}>
            <Box
              as="table"
              sx={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "text",
              }}
            >
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
                    cursor: "pointer",
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
