import React, {useRef, useState} from 'react';
import Icon from '../../components/Icon';
import {useNavigate, useParams} from 'react-router-dom';
import {IconList} from '../../components/money/tagsSection/IconList';
import {useTags} from '../../hooks/useTags';
import {Space} from '../../components/Space';
import {Button} from '../../components/Button';
import {Center} from '../../components/Center';
import {Topbar} from '../../components/money/tagsSection/SetAddWrapper';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px 20px;
`;
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;

  > .icon {
    font-size: 48px;
  }
`;
const NameInput = styled.input`
  width: 0;
  flex: 1;
  border: none;
  outline: none;
  text-align: right;
  line-height: 24px;
  font-size: 20px;
  background: #f5f5f5;
`;

const AddTag: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const moneyType = id as '-' | '+';
  const [iconName, setIconName] = useState<string>('tag');
  const [tagName, setTagName] = useState<{ name: string }>({name: ''});
  const refInput = useRef<HTMLInputElement>(null);
  const blur = () => {
    if (refInput.current !== null) {
      setTagName({name: refInput.current.value});
    }
  };
  const {addTag} = useTags();
  const createTag = () => {
    if(addTag(tagName, iconName, moneyType)) {
      setIconName('tag');
      if (refInput.current !== null) {
        refInput.current.value = ''
        setTagName({name: ''})
      }
    }
  };

  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>添加{moneyType === '-' ? '支出' : '收入'}标签</span>
        <Icon/>
      </Topbar>

      <Wrapper>
        <IconWrapper>
          <Icon name={iconName} className="icon"/>
        </IconWrapper>

        <NameInput type="text"
                   ref={refInput}
                   onBlur={blur}
                   placeholder="输入标签名" maxLength={5}/>
      </Wrapper>

      {/*<EditTag icon={iconName} onTransName={setTagName} value={value}/>*/}

      <IconList iconName={iconName} onChangeName={setIconName}/>

      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={createTag}>添加标签</Button>
      </Center>
    </Layout>
  );
};

export {AddTag};