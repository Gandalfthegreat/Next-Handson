import React from "react";
import style from "./index.module.css";
export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { tabsArray = [] } = this.props;
    this.state = {
      activeTitle: tabsArray[0].title
    };
  }

  onChangeTab = title => {
    this.setState({ activeTitle: title });
  };

  render() {
    const { tabsArray } = this.props;
    const { activeTitle } = this.state;
    return (
      <div className={style.container}>
        <div className={style.titleArea}>
          {tabsArray.map(tab => {
            return (
              <>
                <div
                  className={
                    tab.title === activeTitle
                      ? style.activeTab
                      : style.defaultTab
                  }
                  onClick={() => {
                    this.onChangeTab(tab.title);
                  }}
                >
                  {tab.title}
                </div>
                <div>{tab.title === activeTitle && tab.content}></div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
