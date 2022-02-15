import React, {useState} from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './TagsSection';
import {CategorySection} from './CategorySection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './numberPadSection/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    notes: '',
    category: '-' as Category,
    amount: 0
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj})
  }

  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags => onChange({tags})}/>

      <NotesSection value={selected.notes}
                    onChange={notes => onChange({notes})}/>

      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>

      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;