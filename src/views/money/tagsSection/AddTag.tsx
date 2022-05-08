import React, {useState} from 'react';
import Icon from '../../../components/Icon';
import {useNavigate, useParams} from 'react-router-dom';
import {EditTag} from './EditTag';
import {IconList} from './IconList';
import {useTags} from '../../../hooks/useTags';
import {Space} from '../../../components/Space';
import {Button} from '../../../components/Button';
import {Center} from '../../../components/Center';
import {Topbar} from './SetAddWrapper';
import Layout from '../../../components/Layout';



const AddTag: React.FC = () => {
  const navigate = useNavigate();
  const {addTag} = useTags();
  const [name, setName] = useState<string>('tag');
  const [tagName, setTagName] = useState<{name: string}>({name: ''});
  let {id} = useParams();
  let pathID = id as '-' | '+';


  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>添加{pathID === '-' ? '支出' : '收入'}标签</span>
        <Icon/>
      </Topbar>

      <EditTag icon={name} type={pathID} onTransName={setTagName}/>

      <IconList iconName={name} onChangeName={setName}/>

      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => addTag(tagName, name, pathID)}>添加标签</Button>
      </Center>
    </Layout>
  );
};

export {AddTag};