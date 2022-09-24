import React, { FC } from "react";
import { Box, Card, Divider, Flex, Image } from "theme-ui";
import { useLocation } from "react-router-dom";
import { useGetAllPodcastQuery } from "../../services/podcast.api";
import Skeleton from "react-loading-skeleton";

export const PodcastDetail: FC = () => {
  const QUANTITY = 100;

  let location = useLocation();

  const podcastId = location.pathname.split("/")[2];

  const { data: podcastListData, isLoading: isLoadingPodcastListData } =
    useGetAllPodcastQuery(QUANTITY);

  console.log("podcastListData", podcastListData);

  const podcastList = podcastListData?.feed?.entry;

  const podcast = podcastList?.find(
    (podcast: Podcast) => podcast?.id?.attributes?.["im:id"] === podcastId
  );

  console.log("PODCAST", podcast);

  return isLoadingPodcastListData ? (
    <Card
      sx={{
        maxWidth: "260px",
      }}
    >
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Skeleton width="80%" height={170} />
      </div>
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
          margin: "10px",
        }}
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
      <Box sx={{ margin: "10px" }}>
        <Box sx={{ fontWeight: "bold", fontSize: "3" }}>
          {podcast?.title?.label}
        </Box>
        <Box>{`by ${podcast?.["im:artist"]?.label}`}</Box>
      </Box>

      <Divider
        style={{
          color: "body",
        }}
      />
      <Box sx={{ margin: "10px 0" }}>
        <Box sx={{ fontWeight: "bold" }}>Description:</Box>
        <Box>{podcast?.summary?.label}</Box>
      </Box>
    </Card>
  );
};
