import React, {FC, useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {mainColor} from '../lib/color';
import DatePicker from '../components/date_picker/DatePicker';
import PopUp from '../components/date_picker/Popup';
import {DateTypeSelector} from '../components/DateTypeSelector';
import RecordsList from '../components/statistics/RecordsList';

const TimeSelector = styled.div`
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  background: white;
  padding: 10px 0;
  text-align: center;
  color: ${mainColor};
`;

const Details: FC = () => {
  const [dateType, setDateType] = useState<'year' | 'month' | 'date'>('date');
  const [day, setDay] = useState(new Date());
  const dateStr = dayjs(day).format(dateType === 'month' ? 'YYYY年M月' : 'YYYY年M月D日');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateClick = () => {
    setShowDatePicker(true);
    const dts =document.querySelector('.dateTypeSelector')
    if(dts && dts.clientWidth > 450) {
      window.alert('日期选择仅支持触屏，请使用手机体验');
    }
  };
  const handleCancel = () => {
    setShowDatePicker(false);
  };
  const handleOk = (d: Date) => {
    setDay(d);
    setShowDatePicker(false);
  };

  return (
    <Layout>
      <div className='dateTypeSelector'>
        <DateTypeSelector value1={dateType} value2={'month'} onChange={setDateType}/>
      </div>

      <TimeSelector onClick={handleDateClick}>
        {dateStr}&#9660;
      </TimeSelector>

      <RecordsList day={day} dateType={dateType}/>

      <PopUp
        visible={showDatePicker}
        onCancel={handleCancel}
      >
        <DatePicker
          date={day}
          pickerType={dateType}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </PopUp>
    </Layout>
  );
};

export {Details};