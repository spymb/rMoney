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
          fill: #005DFF;
        }
      }
    }
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