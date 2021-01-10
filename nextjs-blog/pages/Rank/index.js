import React from "react";
import RankBody from "../../components/RankBody";

import { getPosts } from "../../api/RankBody/query.js";
import Tabs from "../../components/Tabs";
export default class Rank extends React.Component {
  constructor() {
    super();
    this.rankBodyData = [];
    this.tabsArray = [];
    this.state = {
      rankData: []
    };
  }

  componentDidMount() {
    this.rankBodyData = Array(10)
      .fill(0)
      .map((_, index) => {
        return {
          userId: index,
          body: "this is the body",
          title: "title"
        };
      });

    this.setState({ rankData: getPosts() });
  }

  render() {
    const tabsArray = Array(2)
      .fill(0)
      .map((_, index) => {
        return {
          title: `title${index}`,
          content: "rank body"
        };
      });
    console.log(tabsArray);
    return (
      <>
        <h1>Hello Next</h1>
        {[].map(item => {
          return (
            <RankBody userId={item.id} body={item.body} title={item.title} />
          );
        })}
        <Tabs tabsArray={tabsArray}></Tabs>
      </>
    );
  }
}
