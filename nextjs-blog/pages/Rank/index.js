import React from "react";
import RankBody from "../../components/RankBody";
export default function Rank() {
  // TO DO: 用axios.get(URL) 获取接口数据
  const rankBodyData = Array(10)
    .fill(0)
    .map((_, index) => {
      return {
        userId: index,
        body: "this is the body",
        title: "title"
      };
    });
  const tabsArray = Array(2)
    .fill(0)
    .map(() => {
      return {
        tabTitle: "rank",
        tabContent: "rank body"
      };
    });
  return (
    <>
      <h1>Hello Next</h1>
      {rankBodyData.map(item => {
        return (
          <RankBody userId={item.userId} body={item.body} title={item.title} />
        );
      })}
      // TO DO2:实现Tabs组件
      <Tabs tabsArray={tabsArray}></Tabs>
    </>
  );
}
