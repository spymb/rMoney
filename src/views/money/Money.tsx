import React, {useState} from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './tagsSection/TagsSection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './numberPadSection/NumberPadSection';
import Icon from '../../components/Icon';
import {Link} from 'react-router-dom';
import {Category} from '../../components/Category';
import {useRecords} from '../../hooks/useRecords';
import {CategoryWrapper} from '../../components/InAndOut';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const defaultFormData = {
  category: '-' as ('-' | '+'),
  tagID: 0,
  notes: '',
  amount: 0
};

function Money() {
  const [formData, setFormData] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof formData>) => {
    setFormData({...formData, ...obj});
  };
  const submit = () => {
    if (addRecord(formData)) {
      setFormData(defaultFormData);
    }
  };
  const child2 = <Link to={'/setTag/' + formData.category}>
    <div>
      <Icon className="icon" name="settings"/>
    </div>
    <span>设置</span>
  </Link>;

  return (
    <MyLayout>
      <CategoryWrapper>
        <Category value={formData.category}
                  onChange={category => onChange({category})}/>
      </CategoryWrapper>

      <TagsSection ID={formData.tagID} category={formData.category}
                   onChangeID={tagID => onChange({tagID})}
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