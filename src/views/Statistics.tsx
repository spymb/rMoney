import React, {useState} from 'react';
import Layout from '../components/Layout';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';

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

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();
  const recordsByC = records.filter(r => r.category === category)

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      <div>
        {
          recordsByC.map(r => {
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
    </Layout>
  );
}

export default Statistics;