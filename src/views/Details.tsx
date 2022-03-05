import React, {FC, useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';
import {mainColor} from '../color';
import DatePicker from '../components/date_picker/DatePicker';
import PopUp from '../components/date_picker/Popup';
import {DateTypeSelector} from '../components/DateTypeSelector';

const Item = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const TimeAndMoney = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 15px;
`;
const TimeSelector = styled.div`
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  background: white;
  padding: 10px 0;
  text-align: center;
  color: ${mainColor};
`;

const Details: FC = () => {
  const [dateType, setDateType] = useState<'year' | 'month' | 'date'>('date');
  const [category, setCategory] = useState<'-' | '+'>('-');
  const [day, setDay] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {records, getDaySum} = useRecords();
  const {getTagName} = useTags();
  const recordsByC = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};

  const handleDateClick = () => {
    setShowDatePicker(true);
  };
  const handleOk = (d: Date) => {
    setDay(d);
    setShowDatePicker(false);
  };
  const handleCancel = () => {
    setShowDatePicker(false);
  };

  recordsByC.map(r => {
    const key = dayjs(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash)
    .sort((a, b) => {
      if (a[0] === b[0]) return 0;
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      return 0;
    });

  return (
    <Layout>
      <DateTypeSelector value1={dateType} value2={'month'} onChange={setDateType}/>

      <TimeSelector onClick={handleDateClick}>
        {dayjs(day).format('YYYY年MM月DD日')}&#9660;
      </TimeSelector>

      {
        array.map(([date, records]) =>
          <div key={date}>
            <TimeAndMoney>
              <div className="time">
                {dayjs(date).format('YYYY年MM月DD日')}
              </div>

              <div className="money">
                总计：￥{getDaySum(records, category, date)}
              </div>
            </TimeAndMoney>


            <div>
              {
                records.map(r => {
                  return <Item key={r.createdAt}>
                    <div className="tags">
                      <span>{getTagName(r.tagID)}</span>
                    </div>

                    {r.notes && <div className="notes">{r.notes}</div>}

                    <div className="amount">￥{r.amount}</div>
                  </Item>;
                })
              }
            </div>
          </div>)
      }

      <PopUp
        show={showDatePicker}
        onCancel={handleCancel}
        position="bottom"
      >
        <DatePicker
          date={day}
          pickerType={'date'}
          onOk={handleOk}
        />
      </PopUp>
    </Layout>
  );
};

export {Details};