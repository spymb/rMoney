import React from 'react';
import styled from 'styled-components';
import Icon from '../../../components/Icon';
import {useNavigate} from 'react-router-dom';
import {EditTag} from './EditTag';
import {IconList} from './TagList';

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
        <Icon/>
      </Topbar>

      <EditTag name={''} icon={''} onChange={() => {}}/>

      <IconList name={''} onChange={() => {}}/>
    </Wrapper>
  );
};

export {AddTag};