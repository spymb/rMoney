import React, {useState} from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './tagsSection/TagsSection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './numberPadSection/NumberPadSection';
import Icon from '../../components/Icon';
import {Link} from 'react-router-dom';
import {CategorySection} from './CategorySection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const defaultFormData = {
  category: '-' as ('-' | '+'),
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
    return;
  };
  const child2 = <Link to="/setTag">
    <div>
      <Icon className="icon" name="settings"/>
    </div>
    <span>设置</span>
  </Link>;

  return (
    <MyLayout>
      <CategorySection value={formData.category}
                       onChange={category => onChange({category})}/>

      <TagsSection IDs={formData.tagIDs} category={formData.category}
                   onChangeIDs={tagIDs => onChange({tagIDs})}
                   lostTag={child2}/>

      <NotesSection value={formData.notes}
                    onChange={notes => onChange({notes})}/>

      <NumberPadSection value={formData.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;