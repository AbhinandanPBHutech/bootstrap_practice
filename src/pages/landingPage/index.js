import React from "react";
import styles from "./index.module.scss";
import Header from "../../components/Header/header";
import LandingPageSections from "../../components/LandingPageSections/landingpagesections";
import LandingPageCarousel from "../../components/LandingPageCarousel/landingpagecarousel";
import LandingPageCategories from "../../components/LandingPageCategories/landingpagecategories";
import TrendingAuctions from "../../components/TrendingAuctions/trendingauctions";

const LandingPage = () => {
  return (
    <div className={styles.main_body}>
      <Header />
      <LandingPageSections />
      <LandingPageCategories />
      <TrendingAuctions title="Trending Auctions" />
      <TrendingAuctions title="Featured products" />
      <TrendingAuctions title="Featured Services" />
      {/* <LandingPageCarousel /> */}
    </div>
  );
};

export default LandingPage;
