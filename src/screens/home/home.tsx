import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Flex, Grid, Image, Input, Text } from "theme-ui";
import { useGetAllPodcastQuery } from "../../services/podcast.api";
import { Podcast } from "../podcast";
import Skeleton from "react-loading-skeleton";
import noSearchFound from "../../assets/searchNotFound.jpg";

import "react-loading-skeleton/dist/skeleton.css";

export const Home: FC = () => {
  const QUANTITY = 100;
  const navigate = useNavigate();

  const { data: podcastListData, isLoading: isLoadingPodcastListData } =
    useGetAllPodcastQuery(QUANTITY);

  const podcastList = podcastListData?.feed?.entry;

  const [filteredPodcastList, setFilteredPodcastList] = useState(podcastList);

  const [searchValue, setSearchValue] = useState("");

  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() => {
    searchValue === ""
      ? setFilteredPodcastList(podcastList)
      : filterPodcastList(searchValue);
  }, [podcastList, searchValue]);

  const filterPodcastList = (value: string) => {
    if (podcastList !== undefined && searchValue) {
      const filtered = podcastList.filter(
        (podcast: Podcast) =>
          podcast["im:artist"]?.label?.toLocaleLowerCase().includes(value) ||
          podcast["im:name"]?.label?.toLocaleLowerCase().includes(value)
      );
      setResults(filtered);
      setFilteredPodcastList(filtered);
    }
  };

  const setResults = (filtered: Podcast[]) => {
    filtered.length === 0 ? setResultsFound(false) : setResultsFound(true);
  };

  const onFilter = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value.toLocaleLowerCase());
    filterPodcastList(searchValue);
  };

  const redirectToPodcast = (id: string) => {
    navigate(`podcast/${id}`);
  };

  return (
    <>
      <Box>
        <Flex sx={{ justifyContent: "flex-end", alignItems: "center", m: 3 }}>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              minWidth: "40px",
              borderRadius: "10px",
              mr: "10px",
              backgroundColor: "primary",
              color: "background",
              height: "fit-content",
              p: "2px",
              minHeight: "24px",
              fontWeight: "bold",
            }}
          >
            <Text sx={{ color: "background", mb: 0 }}>
              {filteredPodcastList && filteredPodcastList?.length}
            </Text>
          </Flex>
          <Input
            onChange={onFilter}
            autofillBackgroundColor="primary"
            sx={{ width: "300px" }}
            placeholder="Filter podcasts..."
          />
        </Flex>
        <Flex
          sx={{
            width: "100%",
            display: resultsFound ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex sx={{ width: "400px" }}>
            <Image
              src={noSearchFound}
              alt="Sin resultados encontrados"
              sx={{ width: "100%" }}
            />
          </Flex>
          <Box sx={{ width: "500px" }}>
            <Text sx={{ fontSize: "6", color: "body" }}>Lo sentimos!</Text>
            <Text sx={{ fontSize: "4", color: "body" }}>
              No hemos encontrado resultados que coincidan con tu b??esqueda.
            </Text>
            <Text sx={{ fontSize: "5", color: "body" }}>
              Por favor intenta nuevamente.
            </Text>
          </Box>
        </Flex>

        {isLoadingPodcastListData ? (
          <Grid gap={3} columns={4} sx={{ p: "20px" }}>
            {Array.from({ length: 20 }).map((__, skeletonIndex) => (
              <div
                key={`skeleton-card-${skeletonIndex}`}
                style={{ textAlign: "center" }}
              >
                <Skeleton height={110} width={110} circle={true} />
                <br />
                <Skeleton count={2} />
              </div>
            ))}
          </Grid>
        ) : (
          <Grid gap={3} columns={4} sx={{ p: "20px" }}>
            {filteredPodcastList?.map((podcast, index) => {
              return (
                <Flex
                  key={index}
                  sx={{
                    mt: "80px",
                    justifyContent: "center",
                    position: "relative",
                  }}
                  onClick={() =>
                    redirectToPodcast(podcast?.id?.attributes?.["im:id"])
                  }
                >
                  <Flex
                    sx={{
                      position: "absolute",
                      top: "-60px",
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
                      textAlign: "center",
                      p: "60px 10px 10px 10px",
                      width: "100%",
                    }}
                  >
                    <Text>{podcast?.["im:name"]?.label.toUpperCase()}</Text>
                    <Text>{`Author: ${podcast?.["im:artist"]?.label}`}</Text>
                  </Card>
                </Flex>
              );
            })}
          </Grid>
        )}
      </Box>
    </>
  );
};
