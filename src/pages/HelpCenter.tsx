import React from "react";
import HelpQuery from "../components/HelpQuery";
import Articles from "../components/Articles";
import KnowledgeBase from "../components/KnowledgeBase";
import PopularArticles from "../components/PopularArticles";
import MoreHelp from "../components/MoreHelp";
import Footer from "../components/Footer";

const HelpCenter = () => {
  return (
    <div className=" ">
      <HelpQuery />
      <Articles />
      <KnowledgeBase />
      <PopularArticles />
      <MoreHelp />
    </div>
  );
};

export default HelpCenter;
