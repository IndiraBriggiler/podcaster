import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Flex, Grid, Image, Text } from "theme-ui";
import { useGetPodcastQuery } from "../../services/podcast.api";

export const Home: FC = () => {
  const quantity = 100;
  const navigate = useNavigate();

  const { data: podcastListData, isLoading: isLoadingPodcastListData } =
    useGetPodcastQuery(quantity);

  const podcastList = podcastListData?.feed?.entry;

  const redirectToPodcast = (id: string) => {
    navigate(`podcast/${id}`);
  };

  return (
    <Grid gap={3} columns={4}>
      {podcastList?.map((podcast, index) => {
        const positionTop = 60;
        const calPositionTop = positionTop * index;

        return (
          <Flex
            key={index}
            sx={{ mt: "80px", justifyContent: "center" }}
            onClick={() =>
              redirectToPodcast(podcast?.id?.attributes?.["im:id"])
            }
          >
            <Flex
              sx={{
                position: "absolute",
                // top: "calc(var(positionTop) + var(calPositionTop))",
                top: "var(positionTop)",

                width: "110px",
                justifyContent: "center",
              }}
            >
              <Image
                src={podcast?.["im:image"]?.[2]?.label}
                sx={{ borderRadius: "50%", width: "100%" }}
              />
            </Flex>
            <Card
              sx={{
                position: "relative",
                textAlign: "center",
                pt: "60px",
                width: "100%",
              }}
            >
              <Box>
                <Text>{podcast?.["im:name"]?.label.toUpperCase()}</Text>
                <Text>{`Author: ${podcast?.["im:artist"]?.label}`}</Text>
              </Box>
            </Card>
          </Flex>
        );
      })}
    </Grid>
  );
};
