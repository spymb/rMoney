import React, {FC, useState} from 'react';
import {TagsSection} from './TagsSection';
import {Button} from '../../../components/Button';
import {Space} from '../../../components/Space';
import {Center} from '../../../components/Center';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Icon from '../../../components/Icon';
import {useTags} from '../../../hooks/useTags';
import {Topbar} from './SetAddWrapper';
import Layout from '../../../components/Layout';

const SetTag: FC = () => {
  const navigate = useNavigate();
  const {id: moneyType} = useParams();
  const [ID, setID] = useState<number>(0);
  const [category] = useState<'-' | '+'>('-');
  const add = <Link to={'/addTag/' + category}>
    <div>
      <Icon name="tianjia" className="icon"/>
    </div>
    <span>添加</span>
  </Link>;
  const {deleteTag} = useTags();

  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>管理{moneyType === '-' ? '支出' : '收入'}标签</span>
        <Icon/>
      </Topbar>

      <TagsSection ID={ID}
                   onChangeID={setID}
                   category={category}
                   lostTag={add}/>

      <Center>
        <Space/>
        <Button onClick={() => deleteTag(ID)}>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {SetTag};