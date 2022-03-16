import React, {useEffect} from "react";
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import UseReducerHook from './components/UseReducerHook';
import {getNames} from './service';
import styles from './styles.less';
import {useModel} from "umi";

const Demo = () => {

  const useAuthModel = useModel('useAuthModel');

  useEffect(async () => {
    const names = await getNames()
    console.log(111, names)
  })

  return (
    <>
      <UseStateHook/>
      <div className={styles.myDiv}>3333</div>
      <div>当前选中 : {useAuthModel.current?.name}</div>
    </>
    )
}

export default Demo;

