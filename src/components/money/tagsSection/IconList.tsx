import styled from 'styled-components';
import React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import {mainColor} from '../../../lib/color';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;

  > li {
    width: 20%;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      margin: 10px 10px;

      > .icon {
        width: 32px;
        height: 32px;
    }
  }

    &.selected {
      > div {
        background: #E8F1FF;

        .icon {
          fill: ${mainColor};
        }
      }
    }
`;

const IconNames = ['canyin', 'custom', 'dushu', 'fushi', 'gongzi', 'jianzhi', 'jiaotong', 'licai', 'lvxing', 'riyongpin', 'shejiao', 'yundong', 'hongbao', 'jiangjin', 'huazhuang', 'shuma', 'yule'];

interface Props {
  iconName: string;
  onChangeName: (name: string) => void;
}

const IconList: React.FC<Props> = (props) => {
  const selectedIconName = props.iconName || '';
  const onSelectIcon = (name: string) => {
    if (name !== selectedIconName) {
      props.onChangeName(name);
    }
  };

  return (
    <Wrapper>
      {IconNames.map(iconName => {
        const selected = classNames({'selected': iconName === props.iconName});

        return (
          <li key={iconName} onClick={() => {onSelectIcon(iconName);}}
              className={selected}>
            <div>
              <Icon className="icon" name={iconName}/>
            </div>
          </li>
        );
      })}
    </Wrapper>
  );
};

export {IconList};