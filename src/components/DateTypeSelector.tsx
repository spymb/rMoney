import styled from 'styled-components';
import React, {useState} from 'react';
import {mainColor} from '../color';

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
  value1: 'date' | 'month' | 'year'
  value2: 'date' | 'month' | 'year'
  onChange: (value: 'date' | 'month' | 'year') => void
}

const DateTypeSelector: React.FC<Props> = (props) => {
  const {value1, value2} = props
  const category = value1;
  const [categoryList] = useState<('date' | 'month' | 'year')[]>([value1, value2]);
  const categoryMap = {'month': '月', 'year': '年', 'date': '日'};

  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(c =>
            <li className={c === category ? 'selected' : ''}
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

export {DateTypeSelector};