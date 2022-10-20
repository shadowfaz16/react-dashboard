import React from "react";
import Exchange from "../components/Exchange/Exchange";
import PageTitle from "../components/Typography/PageTitle";
import CTA from "../components/CTA";

const ExchangeDashboard = () => {
  return (
    <>
      <PageTitle>Exchange</PageTitle>
      <CTA />
      <Exchange />
    </>
  );
};

export default ExchangeDashboard;
