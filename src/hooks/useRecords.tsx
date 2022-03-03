import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import dayjs from 'dayjs';

export type RecordItem = {
  tagIDs: number[]
  notes: string
  category: '-' | '+'
  amount: number
  createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.tagIDs.length === 0) {
      alert('请选择标签');
      newRecord.amount = 0;
      return false;
    }
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };
  const getRecordsByTime = (time: Date, unit: dayjs.UnitType) => {
    return records.filter(record => {
      return dayjs(time).isSame(record.createdAt, unit)
    })
  };
  const getDaySum = (records: RecordItem[], category: '-' | '+', time: string) => {
    const recordsByCategory = records.map(record => {
      if (record.category === category) {
        return record;
      }
    });
    const recordsFormatTime = recordsByCategory.map(r => {
      if (r === undefined) {return; }
      r['createdAt'] = dayjs(r.createdAt).format('YYYY-MM-DD');
      return r;
    });

    const holder = {};
    recordsFormatTime.map(r => {
      if (r === undefined) {return; }
      if (holder.hasOwnProperty(r.createdAt)) {
        // @ts-ignore
        holder[r.createdAt] = holder[r.createdAt] + r.amount;
      } else {
        // @ts-ignore
        holder[r.createdAt] = r.amount;
      }
    });

    // @ts-ignore
    return holder[dayjs(time).format('YYYY-MM-DD')]
  }
  return {records, addRecord, getRecordsByTime, getDaySum};
};