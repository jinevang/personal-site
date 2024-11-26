import React from "react";

import IndexPage from "pages";
import ErrorPage from "pages/404Page";
import AboutPage from "pages/AboutPage";
import DrinkRatingsPage from "pages/DrinkRatingsPage";
import MusicPage from "pages/MusicPage";
import PhotosPageUpdate from "pages/PhotosPageUpdate";
import ResumePage from "pages/ResumePage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<IndexPage />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="music" element={<MusicPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="drinks" element={<DrinkRatingsPage />} />
      <Route path="photos" element={<PhotosPageUpdate />} />
    </Routes>
  );
};

export default AppRouter;
