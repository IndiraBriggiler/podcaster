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

  const [podcastList, setPodcastList] = useState(podcastListData?.feed?.entry);

  useEffect(() => {
    setPodcastList(podcastListData?.feed?.entry);
    setFilteredPodcastList(podcastList);
  }, [podcastListData]);

  const [filteredPodcastList, setFilteredPodcastList] = useState(podcastList);

  const [searchValue, setSearchValue] = useState("");

  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() => {
    setFilteredPodcastList(podcastList);
  }, [podcastList]);

  useEffect(() => {
    if (podcastList !== undefined && searchValue.length > 0) {
      filterPodcastList(searchValue);
    }
  }, [searchValue]);

  const filterPodcastList = (value: string) => {
    if (podcastList !== undefined && searchValue) {
      const filtered = podcastList.filter(
        (podcast: Podcast) =>
          podcast["im:artist"]?.label?.toLocaleLowerCase().includes(value) ||
          podcast["im:name"]?.label?.toLocaleLowerCase().includes(value)
      );
      showResults(filtered);
      setResults(filtered);
    }
  };

  const setResults = (filtered: Podcast[]) => {
    filtered.length === 0 ? setResultsFound(false) : setResultsFound(true);
  };

  const showResults = (filtered: Podcast[]) => {
    //VER NO FUNCIONA
    if (searchValue.length === 0) {
      setFilteredPodcastList(podcastList);
      console.log("LISTA ENTERA");
    } else {
      setFilteredPodcastList(filtered);
      console.log("puso el filtro");
    }
    // setFilteredPodcastList(filtered);
  };

  const onFilter = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value.toLocaleLowerCase());
    filterPodcastList(searchValue);
  };

  const redirectToPodcast = (id: string) => {
    navigate(`podcast/${id}`);
  };

  console.log("fILTERED POD", filteredPodcastList);
  return (
    <>
      <Box>
        <Flex
          sx={{ justifyContent: "flex-end", alignItems: "center", m: "20px" }}
        >
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
            <Text>{filteredPodcastList && filteredPodcastList?.length}</Text>
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
            <Box sx={{ fontSize: "6", color: "body" }}>Lo sentimos!</Box>
            <Box sx={{ fontSize: "4", color: "body" }}>
              No hemos encontrado resultados que coincidan con tu búesqueda.
            </Box>
            <Box sx={{ fontSize: "5", color: "body" }}>
              Por favor intenta nuevamente.
            </Box>
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
                      height: "fit-content",
                    }}
                  >
                    <Box>{podcast?.["im:name"]?.label.toUpperCase()}</Box>
                    <Box>{`Author: ${podcast?.["im:artist"]?.label}`}</Box>
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
