import React, {useState} from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './tagsSection/TagsSection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './numberPadSection/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const defaultFormData = {
  tagIDs: [] as number[],
  notes: '',
  amount: 0
};

function Money() {
  const [formData, setFormData] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof formData>) => {
    setFormData({...formData, ...obj});
  };
  const submit = () => {
    return
  }

  return (
    <MyLayout>
      <TagsSection value={formData.tagIDs}
                    onChange={tagIDs => onChange({tagIDs})}/>

      <NotesSection value={formData.notes}
                    onChange={notes => onChange({notes})}/>

      <NumberPadSection value={formData.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;