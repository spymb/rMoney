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
  const {deleteTag} = useTags()

  return (
    <Wrapper>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <CategorySection value={category}
                         onChange={category => setCategory(category)}/>
        <span>完成</span>
      </Topbar>

      <EditTag name="" icon=""/>

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