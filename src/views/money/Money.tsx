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

  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags) => setSelected({
                     ...selected,
                     tags: tags
                   })}/>

      <NotesSection value={selected.notes}
                    onChange={(notes) => setSelected({
                    ...selected,
                    notes: notes
                    })}/>

      <CategorySection value={selected.category}
                       onChange={(category) => {
                         setSelected({
                           ...selected,
                           category: category
                         });
                       }}/>

      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {
                          setSelected({
                            ...selected,
                            amount: amount
                          });
                        }}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;