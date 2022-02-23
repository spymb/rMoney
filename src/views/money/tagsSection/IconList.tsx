import styled from 'styled-components';
import React from 'react';
import classNames from 'classnames';
import Icon from '../../../components/Icon';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;

  .category-icon-wrapper {
  }

  > li {
    width: 20%;
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
  background: blue;

  &.selected {
    background-color: red;

    .icon {
      fill: #fff;
    }
  }
`;
const IconNames = ['canyin', 'custom', 'dushu', 'fushi', 'gongzi', 'jianzhi', 'jiaotong', 'licai', 'lvxing', 'riyongpin', 'shejiao', 'yundong', 'hongbao', 'jiangjin', 'huazhuang', 'shuma', 'yule'];

interface Props {
  name: string;
  onChange: (icon: string) => void;
}

const IconList: React.FC<Props> = (props) => {
  const {name, onChange} = props;
  return (
    <Wrapper>
      {IconNames.map(iconName => {
        const selected = classNames({
          'selected': iconName === name
        });

        return (
          <li key={iconName} onClick={()=> {onChange(iconName);}}
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