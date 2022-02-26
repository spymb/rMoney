import styled from 'styled-components';
import React from 'react';
import classNames from 'classnames';
import Icon from '../../../components/Icon';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  > li {
    width: 20%;
    &.selected {
      background-color: red;
  }
`;
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 10px 10px;
`;
const IconNames = ['canyin', 'custom', 'dushu', 'fushi', 'gongzi', 'jianzhi', 'jiaotong', 'licai', 'lvxing', 'riyongpin', 'shejiao', 'yundong', 'hongbao', 'jiangjin', 'huazhuang', 'shuma', 'yule'];

interface Props {
  iconName: string;
  onChange?: (icon: string) => void;
  onChangeName: (name: string) => void;
}


const IconList: React.FC<Props> = (props) => {
  const selectedIconName = props.iconName || '';
  const onToggleIcon = (name: string) => {
    if (name !== selectedIconName) {
      props.onChangeName(name);
    } else {
      props.onChangeName('');
    }
  };

  return (
    <Wrapper>
      {IconNames.map(iconName => {
        const selected = classNames({'selected': iconName === props.iconName});

        return (
          <li key={iconName} onClick={() => {onToggleIcon(iconName);}}
              className={selected}>
            <IconWrapper>
              <Icon className="icon" name={iconName}/>
            </IconWrapper>
          </li>
        );
      })}
    </Wrapper>
  );
};

export {IconList};