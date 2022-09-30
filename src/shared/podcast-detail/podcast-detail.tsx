import React, { FC } from "react";
import { Box, Card, Divider, Flex, Image, Text } from "theme-ui";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAllPodcastQuery } from "../../services/podcast.api";
import Skeleton from "react-loading-skeleton";

export const PodcastDetail: FC = () => {
  const QUANTITY = 100;
  const navigate = useNavigate();

  let location = useLocation();

  const podcastId = location.pathname.split("/")[2];

  const { data: podcastListData, isLoading: isLoadingPodcastListData } =
    useGetAllPodcastQuery(QUANTITY);

  const podcastList = podcastListData?.feed?.entry;

  const podcast = podcastList?.find(
    (podcast: Podcast) => podcast?.id?.attributes?.["im:id"] === podcastId
  );

  const redirectToDetail = () => {
    navigate(`/podcast/${podcastId}`);
  };

  return isLoadingPodcastListData ? (
    <Card
      sx={{
        maxWidth: "260px",
      }}
    >
      <Box style={{ textAlign: "center", padding: 3 }}>
        <Skeleton width="80%" height={170} />
      </Box>
      <Divider
        style={{
          color: "body",
        }}
      />
      <Skeleton width="80%" height="20px" />
      <Skeleton width="70%" height="15px" />
      <Divider
        style={{
          color: "body",
        }}
      />
      <Skeleton width="40%" height="15px" style={{ textAlign: "start" }} />
      <Skeleton width="100%" count={5} />
    </Card>
  ) : (
    <Card
      sx={{
        maxWidth: "260px",
      }}
    >
      <Flex
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          cursor: "pointer",
        }}
        onClick={redirectToDetail}
        data-testid="podcast-img"
      >
        <Image
          src={podcast?.["im:image"]?.[2]?.label}
          sx={{ borderRadius: "5px", width: "80%" }}
        />
      </Flex>
      <Divider
        style={{
          color: "body",
        }}
      />
      <Box sx={{ m: 2, cursor: "pointer" }} onClick={redirectToDetail}>
        <Text variant="title">{podcast?.title?.label}</Text>
        <Text>{`by ${podcast?.["im:artist"]?.label}`}</Text>
      </Box>

      <Divider
        style={{
          color: "body",
        }}
      />

      <Box sx={{ my: 2 }}>
        <Text sx={{ fontWeight: "bold" }}>Description:</Text>
        <Text>{podcast?.summary?.label}</Text>
      </Box>
    </Card>
  );
};
