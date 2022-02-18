import React, {useState} from 'react';
import Layout from '../components/Layout';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import dayjs from 'dayjs/esm';

const Item = styled.div`
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();

  const recordsByC = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};

  recordsByC.map(r => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日');
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
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      {
        array.map(([date, records]) =>
          <div>
            <Header>
              {date}
            </Header>

            <div>
              {
                records.map(r => {
                  return <Item key={r.createdAt}>
                    <div className="tags">
                      {r.tagIDs.map(id => <span key={id}>{getTagName(id)}</span>)}
                    </div>

                    {r.notes && <div className="notes">{r.notes}</div>}

                    <div className="amount">￥{r.amount}</div>
                  </Item>;
                })
              }
            </div>
          </div>)
      }
    </Layout>
  );
}

export default Statistics;