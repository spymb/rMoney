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
  const [formData, setFormData] = useState(defaultFormData);
  const {addRecord} = useRecords()

  const onChange = (obj: Partial<typeof formData>) => {
    setFormData({...formData, ...obj});
  };
  const submit = () => {
    if (addRecord(formData)) {
      setFormData(defaultFormData);
    }
  }

  return (
    <MyLayout>
      <TagsSection value={formData.tagIDs}
                   onChange={tagIDs => onChange({tagIDs})}/>

      <NotesSection value={formData.notes}
                    onChange={notes => onChange({notes})}/>

      <CategorySection value={formData.category}
                       onChange={category => onChange({category})}/>

      <NumberPadSection value={formData.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;