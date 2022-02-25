import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './TagsSection';
import {EditTag} from './EditTag';
import {Button} from '../../../components/Button';
import {Space} from '../../../components/Space';
import {Center} from '../../../components/Center';
import {Link, useNavigate} from 'react-router-dom';
import Icon from '../../../components/Icon';
import {CategorySection} from '../CategorySection';
import {useTags} from '../../../hooks/useTags';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 10px;
  padding: 4px;
  background: white;
  font-size: 12px;
`;

const SetTag: FC = () => {
  const add = <Link to="/addTag">
    <div>
      <Icon className="icon" name="tianjia"/>
    </div>
    <span>添加</span>
  </Link>;
  const navigate = useNavigate();
  const [category, setCategory] = useState<'-' | '+'>('-');
  const [ID, setID] = useState<number>(0);
  const {deleteTag, getTagName, findTag, updateTag} = useTags()
  const tagName = getTagName(ID)
  const tag = findTag(ID)
  const iconName = tag ? tag.icon : 'tag'
  const submit = () => {
    if (tagName === '') {
      window.alert('标签名不能为空')
    } else {
      window.location.reload();
    }
  }


  return (
    <Wrapper>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <CategorySection value={category}
                         onChange={category => setCategory(category)}/>
        <button onClick={submit}>完成</button>
      </Topbar>

      <EditTag icon={iconName} tagID={ID} tagName={tagName} onChangeName={updateTag}/>

      <TagsSection category={category}
                   lostTag={add}
                   ID={ID}
                   onChangeID={ID => setID(ID)}/>

      <Center>
        <Space/>
        <Button onClick={() => deleteTag(ID)}>删除标签</Button>
      </Center>
    </Wrapper>
  );
};

export {SetTag};