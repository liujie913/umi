import React, {useEffect} from 'react';
import HistoryDemo from "./components/History";
import LinkDemo from "./components/Link";
import NavLinkDemo from "./components/NavLink";
import WithRouter from "./components/WithRouter";
import { Prompt} from "umi";

const Demo = () =>{


  return(
    <>
    <div>111</div>
      <NavLinkDemo/>
      <WithRouter/>
      <Prompt message="你确定要离开么？" />
    </>
  );
}

export default Demo;
