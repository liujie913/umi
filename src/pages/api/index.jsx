import React, {useEffect} from 'react';
import HistoryDemo from "./components/History";
import LinkDemo from "./components/Link";
import NavLinkDemo from "./components/NavLink";
import WithRouter from "./components/WithRouter";
import {Prompt, useAccess, Access, useModel, history} from "umi";
import useAuthModel from "@/models/useAuthModel";
import { Button} from 'antd';

const Demo = () =>{
  const { initialState } = useModel('@@initialState');
  const useAuthModel = useModel('useAuthModel');
  const access = useAccess();

  useEffect(() =>{
    useAuthModel.loadData();
  }, [])


  if(access.table){
    console.log(444444444)
  }

  return(
    <>
    <div>111</div>
      {useAuthModel.data?.map(d => (<div key={d.id}>{d.name}</div>))}
      <NavLinkDemo/>
      <WithRouter/>
      <Prompt message="你确定要离开么？" />
      <Access
        accessible={access.table}
        fallback={<div>无权限</div>}
      >
        <div>有权限</div>
      </Access>
      <Button
        onClick={() => {
          useAuthModel.setId(1);
        }}
      >
        选中小王
      </Button>
      <div>当前选中 : {useAuthModel.current?.name}</div>
    </>
  );
}

export default Demo;
