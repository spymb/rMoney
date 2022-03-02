import React, {useState} from 'react';
import Layout from '../../components/Layout';
import {Chart} from './Chart';
import {CategorySection} from '../money/CategorySection';
import {MonthOrYear} from './MonthOrYear';
import DatePicker from '../../components/date_picker/DatePicker';

interface Props {}

const Statistics: React.FunctionComponent<Props> = () => {
  const [dateType, setDateType] = useState<'month' | 'year'>('month');
  const [moneyType, setMoneyType] = useState<'-' | '+'>('-');
  const [day, setDay] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleOk = (d: Date) => {
    setDay(d)
    setShowDatePicker(false)
  }

  return (
    <Layout>
      <CategorySection value={moneyType} onChange={setMoneyType}/>

      <MonthOrYear value={dateType} onChange={setDateType}/>

      <Chart day={day} dateType={dateType} moneyType={moneyType}/>

      <DatePicker date={day} pickerType={'full-date'} onOk={handleOk}/>
    </Layout>
  );
};

export {Statistics};