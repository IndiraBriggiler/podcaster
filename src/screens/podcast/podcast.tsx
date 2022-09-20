import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Box, Card, Flex, Image, Text } from "theme-ui";
import {
  useGetPodcastDetailQuery,
  useGetPodcastQuery,
} from "../../services/podcast.api";

export const Podcast: FC = () => {
  const quantity = 100;

  let location = useLocation();

  const podcastId = location.pathname.split("/")[2];

  const {
    data: podcastListData,
    isLoading: isLoadingPodcastListData,
    // refetch: refetchSubscriptionQuery,
  } = useGetPodcastQuery(quantity);

  const {
    data: podcastData,
    isLoading: isLoadingPodcastData,
    // refetch: refetchSubscriptionQuery,
  } = useGetPodcastDetailQuery(podcastId, {
    skip: !podcastId,
  });

  const podcastList = podcastListData?.feed?.entry;

  const podcast = podcastList?.find(
    (podcast: Podcast) => podcast.id?.attributes?.["im:id"] === podcastId
  );

  console.log("PODCAST LIST DATA", podcast);

  const podcastAlone = podcastData?.results?.[0];

  console.log("PODCAST DETAIL", podcastAlone, isLoadingPodcastData);

  const episodesList = podcastList?.filter(
    (podcast: Podcast) => podcast.id?.attributes?.["im:id"] === podcastId
  );

  console.log("EPISODES LIST", episodesList);

  return (
    <Flex>
      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        <Flex sx={{ width: "100px" }}>
          <Image
            src={podcast?.["im:image"]?.[2]?.label}
            sx={{ borderRadius: "5px", width: "100%" }}
          />
        </Flex>
        <hr />
        <Text>{podcast?.title.label.split(" - ")[0]}</Text>
        <Text>{podcast?.title.label.split(" - ")[1]}</Text>

        <hr />
        <Text>Description: </Text>
        <Text>{podcast?.summary?.label}</Text>
      </Card>
      <Box sx={{ width: "80%" }}>
        <Card>
          <Text>{`Episodes ${podcastAlone?.trackCount}`}</Text>
        </Card>
        <Card>
          <Text></Text>
        </Card>
      </Box>
    </Flex>
  );
};
