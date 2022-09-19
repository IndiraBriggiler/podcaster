import React, { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Episode } from "../screens/episode";
import { Home } from "../screens/home";
import { Podcast } from "../screens/podcast";
import { Navbar } from "../shared/navbar";

export const PodcasterRouter: FC = () => {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<Podcast />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<Episode />}
        />
      </Routes>
    </Router>
  );
};
