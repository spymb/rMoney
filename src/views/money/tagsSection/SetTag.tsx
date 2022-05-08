import React, {FC, useState} from 'react';
import {TagsSection} from './TagsSection';
import {EditTag} from './EditTag';
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
  const [category] = useState<'-' | '+'>('-');
  const [ID, setID] = useState<number>(0);
  const {deleteTag, getTagName, findTag, updateTag} = useTags();
  const tagName = getTagName(ID);
  const tag = findTag(ID);
  const iconName = tag ? tag.icon : 'tag';
  let {id} = useParams();
  let pathID = id as '-' | '+';
  const add = <Link to={'/addTag/' + category}>
    <div>
      <Icon className="icon" name="tianjia"/>
    </div>
    <span>添加</span>
  </Link>;


  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>管理{pathID === '-' ? '支出' : '收入'}标签</span>
        <Icon/>
      </Topbar>

      <EditTag icon={iconName} tagID={ID} tagName={tagName} onChangeName={updateTag}/>

      <TagsSection category={category}
                   lostTag={add}
                   ID={ID}
                   onChangeID={setID}/>

      <Center>
        <Space/>
        <Button onClick={() => deleteTag(ID)}>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {SetTag};