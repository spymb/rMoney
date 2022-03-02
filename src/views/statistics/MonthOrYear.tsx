import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 16px;
  padding: 0 150px;
  margin: 30px;

  > ul {
    display: flex;
    background: #c4c4c4;
    justify-content: center;

    > li {
      width: 50%;
      text-align: center;
      padding: 8px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
  value: 'month' | 'year'
  onChange: (value: 'month' | 'year') => void
}

const MonthOrYear: React.FC<Props> = (props) => {
  const categoryMap = {'month': '月', 'year': '年'};
  const [categoryList] = useState<('month' | 'year')[]>(['month', 'year']);
  const category = props.value;

  return (
    <Wrapper>

      <ul>
        {
          categoryList.map(c =>
            <li className={category === c ? 'selected' : ''}
                onClick={() => {props.onChange(c);}}
                key={c}>
              {categoryMap[c]}
            </li>
          )
        }
      </ul>
    </Wrapper>
  );
};

export {MonthOrYear};