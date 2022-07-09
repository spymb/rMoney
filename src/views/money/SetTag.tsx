import React, {FC, useState} from 'react';
import {TagsSection} from '../../components/money/tagsSection/TagsSection';
import {Space} from '../../components/Space';
import {Center} from '../../components/Center';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Icon from '../../components/Icon';
import {useTags} from '../../hooks/useTags';
import {Topbar} from '../../components/money/tagsSection/SetAddWrapper';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 18px; border: none; padding: 8px 12px;
  background: #FF6161; border-radius: 4px;
  color: white;
`;

const SetTag: FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const moneyType = id as '-' | '+'
  const [ID, setID] = useState<number>(0);
  const add = <Link to={'/addTag/' + moneyType}>
    <div>
      <Icon name="tianjia" className="icon"/>
    </div>
    <span>添加</span>
  </Link>;
  const {tags, deleteTag} = useTags();

  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>管理{moneyType === '-' ? '支出' : '收入'}标签</span>
        <Icon/>
      </Topbar>

      <TagsSection ID={ID} tags={tags}
                   onChangeID={setID}
                   category={moneyType}
                   lostTag={add}/>

      <Center>
        <Space/>
        <Button onClick={() => deleteTag(ID)}>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {SetTag};