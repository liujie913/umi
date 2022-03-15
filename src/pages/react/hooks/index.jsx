import React, {useEffect} from "react";
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import UseReducerHook from './components/UseReducerHook';
import {getNames} from './service';
import styles from './styles.less';

const Demo = () => {

  useEffect(async () => {
    const names = await getNames()
    console.log(111, names)
  })

  return (
    <>
      <UseStateHook/>
      <div className={styles.myDiv}>3333</div>
    </>
    )
}

export default Demo;

