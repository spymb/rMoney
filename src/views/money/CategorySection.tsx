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
  value: '-' | '+'
  onChange: (value: '-' | '+') => void
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
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

export {CategorySection};