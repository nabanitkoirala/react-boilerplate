import React from "react";
import HelpQuery from "../components/HelpQuery";
import Articles from "../components/Articles";
import KnowledgeBase from "../components/KnowledgeBase";
import PopularArticles from "../components/PopularArticles";
import MoreHelp from "../components/MoreHelp";

const HomePage = () => {
  return (
    <div className=" ">

      <Articles />
      {/* <KnowledgeBase />
      <PopularArticles />
      <MoreHelp /> */}
    </div>
  )
};

export default HomePage;
