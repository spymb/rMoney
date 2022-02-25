import styled from 'styled-components';
import {FC} from 'react';
import Icon from '../../../components/Icon';

const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
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
    font-size: 32px;
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
`;

interface Props {
  tagID: number;
  tagName: string;
  icon: string;
  onChangeName?: (ID: number, {name}: { name: string }) => void;
}

const EditTag: FC<Props> = (props) => {
  const {tagID, tagName, icon, onChangeName} = props;
  const holder = () => {
    return onChangeName ? '修改标签名' : '添加标签名';
  };

  return (
    <Wrapper>
      <IconWrapper>
        <Icon className="icon" name={icon}/>
      </IconWrapper>

      <NameInput type="text" value={tagName} onChange={
        (e) => {
          onChangeName && onChangeName(tagID, {name: e.target.value});
        }}
                 placeholder={holder()}/>
    </Wrapper>
  );
};

export {EditTag};