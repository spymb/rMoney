import React, {useState} from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './TagsSection';
import {CategorySection} from './CategorySection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './numberPadSection/NumberPadSection';
import {useRecords} from '../../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIDs: [] as number[],
  notes: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords()

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    addRecord(selected)
    setSelected(defaultFormData)
  }

  return (
    <MyLayout>
      <TagsSection value={selected.tagIDs}
                   onChange={tagIDs => onChange({tagIDs})}/>

      <NotesSection value={selected.notes}
                    onChange={notes => onChange({notes})}/>

      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>

      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;