import React, {useState} from 'react';
import Layout from '../components/Layout';
import {Chart} from './Chart';

interface Props {}

const Statistics: React.FunctionComponent<Props> = () => {
  const [dateType, setDateType] = useState<string>('month');
  const [moneyType, setMoneyType] = useState<'-' | '+'>('-');
  const [day, setDay] = useState(new Date());

  return (
    <Layout>
      <Chart day={day} dateType={dateType} moneyType={moneyType}/>
    </Layout>
  );
};

export {Statistics};