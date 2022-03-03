import React, {useState} from 'react';
import Layout from '../../components/Layout';
import {Chart} from './Chart';
import {CategorySection} from '../money/CategorySection';
import {MonthOrYear} from './MonthOrYear';
import DatePicker from '../../components/date_picker/DatePicker';
import PopUp from '../../components/date_picker/Popup';
import dayjs from 'dayjs';

interface Props {}

const Statistics: React.FunctionComponent<Props> = () => {
  const [dateType, setDateType] = useState<'month' | 'year'>('month');
  const [moneyType, setMoneyType] = useState<'-' | '+'>('-');
  const [day, setDay] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)
  const dateStr = dayjs(day).format(dateType === 'year' ? 'YYYY年' : 'YYYY年M月')

  const handleOk = (d: Date) => {
    setDay(d)
    console.log(day);
    setShowDatePicker(false)
  }
  const handleCancel = () => {
    setShowDatePicker(false)
  }
  const handleDateClick = () => {
    setShowDatePicker(true)
  }

  return (
    <Layout>
      <CategorySection value={moneyType} onChange={setMoneyType}/>

      <MonthOrYear value={dateType} onChange={setDateType}/>

      <div className="date" onClick={handleDateClick}>
        {dateStr}&#9660;
      </div>

      <Chart day={day} dateType={dateType} moneyType={moneyType}/>

      <PopUp
        show={showDatePicker}
        onCancel={handleCancel}
        position="bottom"
      >
        <DatePicker
          date={day}
          pickerType={dateType}
          onOk={handleOk}
        />
      </PopUp>
    </Layout>
  );
};

export {Statistics};