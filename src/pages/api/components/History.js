import React from 'react';
import { history } from "umi";
import { Button } from 'antd';

const HistoryDemo = () =>{
  return(
    <Button onClick={() =>{history.push('/list')}}> 进入table </Button>
  );
}

export default HistoryDemo;
