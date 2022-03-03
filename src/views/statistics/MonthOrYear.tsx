import styled from 'styled-components';
import React, {useState} from 'react';
import {mainColor} from '../../color';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    display: flex;
    background: white;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected {
        background: ${mainColor};
        color: white;
      }
    }
  }
  `



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