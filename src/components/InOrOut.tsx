import React, {useState} from 'react';

type Props = {
  value: '-' | '+'
  onChange: (value: '-' | '+') => void
}

const InOrOut: React.FC<Props> = (props) => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value;
  const categoryMap = {'-': '支出', '+': '收入'};

  return (
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
  );
};

export {InOrOut};