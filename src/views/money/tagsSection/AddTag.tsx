import React from 'react';
import styled from 'styled-components';
import Icon from '../../../components/Icon';
import {useNavigate} from 'react-router-dom';
import {EditTag} from './EditTag';
import {IconList} from './IconList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const AddTag: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>自定义标签</span>
        <span>完成</span>
      </Topbar>

      <EditTag tagID={0} tagName={''} icon={''} onChangeName={() => {}}/>

      <IconList name={''} onChange={() => {}}/>
    </Wrapper>
  );
};

export {AddTag};