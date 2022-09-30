import { htmlDecode } from "js-htmlencode";
import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { useLocation } from "react-router-dom";
import { Card, Flex, Divider, Text } from "theme-ui";
import { useGetPodcastDetailQuery } from "../../services/podcast.api";
import { PodcastDetail } from "../../shared/podcast-detail";
import { EpisodeData } from "./episodeData";

export const Episode: FC = () => {
  let location = useLocation();

  const episodeId = location.pathname.split("/")[4];

  const isLoading = false;

  const description = EpisodeData?.descriptionn;

  const renderDescription = () => {
    if (typeof description === "string") {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: htmlDecode(description),
          }}
        />
      );
    } else {
      return description;
    }
  };

  return (
    <Flex sx={{ p: 4, justifyContent: "space-between" }}>
      <PodcastDetail />
      <Card sx={{ width: "75%", py: 4, px: 3 }}>
        {isLoading ? (
          <>
            <Skeleton height={24} style={{ marginBottom: "8px" }} />
            <Skeleton count={6} />
            <Divider sx={{ my: 4 }} />
            <Skeleton height={54} />{" "}
          </>
        ) : (
          <>
            <Text variant="h3">
              {`${EpisodeData?.artistName} - ${EpisodeData?.name}`}
            </Text>
            <Text
              variant="italic"
              sx={{
                display: "inline-block",
                mp: 2,
                "&:a": {
                  textDecoration: "none",
                },
              }}
            >
              {renderDescription()}
            </Text>
            <Divider sx={{ my: 4 }} />
            <audio controls style={{ width: "100%" }}>
              <source src={EpisodeData?.url} />
            </audio>
          </>
        )}
      </Card>
    </Flex>
  );
};
