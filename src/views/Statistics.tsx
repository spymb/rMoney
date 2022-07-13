import React, {useState} from 'react';
import Layout from '../components/Layout';
import {Chart} from '../components/statistics/Chart';
import {DateTypeSelector} from '../components/DateTypeSelector';
import DatePicker from '../components/date_picker/DatePicker';
import PopUp from '../components/date_picker/Popup';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {mainColor} from '../lib/color';
import {RankList} from '../components/statistics/RankList';
import {InOrOut} from '../components/InOrOut';
import {useRecords} from '../hooks/useRecords';

const TimeAndMoney = styled.header`
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  background: white;
  padding: 10px 15px;
  text-align: center;
  color: ${mainColor};
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  > .money {
    > span {
      margin-left: 10px;
    }
  }
`;
const CategoryWrapper = styled.div`
  font-size: 14px;
  padding: 0 110px;
  margin: 10px 0;

  > ul {
    justify-content: space-evenly;
    display: flex;

    > li {
      border: 1px solid #cccccc;
      border-radius: 5px;
      width: 30%;
      text-align: center;
      padding: 4px 0;

      &.selected {
        background: ${mainColor};
        color: white;
      }
    }
  }
`;

const Statistics: React.FunctionComponent = () => {
  const [dateType, setDateType] = useState<'date' | 'month' | 'year'>('month');
  const [day, setDay] = useState(new Date());
  const [category, setCategory] = useState<'-' | '+'>('-');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const {getSum, records} = useRecords();
  const dateStr = dayjs(day).format(dateType === 'year' ? 'YYYY年' : 'YYYY年M月');

  const handleOk = (d: Date) => {
    setDay(d);
    setDatePickerVisible(false);
  };
  const handleCancel = () => {
    setDatePickerVisible(false);
  };
  const handleDateClick = () => {
    setDatePickerVisible(true);
    const dts =document.querySelector('.dateTypeSelector')
    if(dts && dts.clientWidth > 450) {
      window.alert('日期选择仅支持触屏，请使用手机体验');
    }
  };

  const outcome = getSum(records, '-', day.toISOString(), dateType) || 0;
  const income = getSum(records, '+', day.toISOString(), dateType) || 0;

  return (
    <Layout>
      <div className='dateTypeSelector'>
        <DateTypeSelector value1={dateType} value2={'year'} onChange={setDateType}/>
      </div>

      <TimeAndMoney>
        <div className="time" onClick={handleDateClick}>
          {dateStr}&#9660;
        </div>

        <div className="money">
          <span>支出￥{outcome}</span>
          <span>收入￥{income}</span>
        </div>
      </TimeAndMoney>

      <CategoryWrapper>
        <InOrOut value={category} onChange={setCategory}/>
      </CategoryWrapper>

      <Chart day={day} dateType={dateType} moneyType={category}/>

      <RankList day={day} dateType={dateType} category={category}/>

      <PopUp
        visible={datePickerVisible}
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

export {Statistics};