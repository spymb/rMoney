import React, {useState} from 'react';
import Layout from '../../components/Layout';
import {Chart} from './Chart';
import {MonthOrYear} from './MonthOrYear';
import DatePicker from '../../components/date_picker/DatePicker';
import PopUp from '../../components/date_picker/Popup';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {mainColor} from '../../color';

const TimeSelector = styled.div`
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  background: white;
  padding: 10px 0;
  text-align: center;
  color: ${mainColor};
`;

const Statistics: React.FunctionComponent = () => {
  const [dateType, setDateType] = useState<'month' | 'year'>('month');
  const [day, setDay] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateStr = dayjs(day).format(dateType === 'year' ? 'YYYY年' : 'YYYY年M月');

  const handleOk = (d: Date) => {
    setDay(d);
    console.log(day);
    setShowDatePicker(false);
  };
  const handleCancel = () => {
    setShowDatePicker(false);
  };
  const handleDateClick = () => {
    setShowDatePicker(true);
  };

  return (
    <Layout>
      <MonthOrYear value={dateType} onChange={setDateType}/>

      <TimeSelector onClick={handleDateClick}>
        {dateStr}趋势图&#9660;
      </TimeSelector>

      <Chart day={day} dateType={dateType}/>

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