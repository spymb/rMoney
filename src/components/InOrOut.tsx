import React, {useState} from 'react';

type Props = {
  value: '-' | '+'
  onChange: (value: '-' | '+') => void
}

const InOrOut: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value;

  return (
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
  );
};

export {InOrOut};