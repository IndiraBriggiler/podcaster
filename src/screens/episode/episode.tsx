import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Card, Embed, Flex, Link, Text } from "theme-ui";
import { useGetPodcastDetailQuery } from "../../services/podcast.api";
import { PodcastDetail } from "../../shared/podcast-detail";
import { EpisodeData } from "./episodeData";

export const Episode: FC = () => {
  let location = useLocation();

  const episodeId = location.pathname.split("/")[4];

  // const podcastList = podcastListData?.feed?.entry;

  // const episode = podcastList?.find(
  //   (podcast: Podcast) => podcast.id?.attributes?.["im:id"] === podcastId
  // );

  return (
    <Flex sx={{ p: "20px", justifyContent: "space-between" }}>
      <PodcastDetail />
      <Card>
        <Text sx={{ fontSize: "4" }}>
          {" "}
          {`${EpisodeData?.artistName} - ${EpisodeData?.name}`}
        </Text>
        <Text>{EpisodeData?.description}</Text>

        <audio controls>
          <source src={EpisodeData?.url} />
        </audio>
      </Card>
    </Flex>
  );
};
