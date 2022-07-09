import styled from 'styled-components';
import {FC, useRef} from 'react';
import Icon from '../../../components/Icon';

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

interface Props {
  tagID?: number;
  tagName?: string;
  icon: string;
  type?: '-' | '+' | '';
  onChangeName?: (ID: number, obj: { name: string }) => void;
  onTransName?: (obj: { name: string }) => void;
  onChangeID?: (ID: number) => void;
}

const EditTag: FC<Props> = (props) => {
  const {tagID, tagName, icon, onChangeName, onTransName, onChangeID} = props;
  const refInput = useRef<HTMLInputElement>(null);
  const blurer = () => {
    if (refInput.current !== null) {
      if (onChangeName && tagID) {
        onChangeName(tagID, {name: refInput.current.value});
        onChangeID && onChangeID(0)
        refInput.current.value = '';
        refInput.current.placeholder = '修改标签名';
      } else if (onTransName) {
        onTransName({name: refInput.current.value});
      }
    }
  };

  return (
    <Wrapper>
      <IconWrapper>
        <Icon name={icon} className="icon"/>
      </IconWrapper>

      <NameInput type="text"
                 ref={refInput}
                 onBlur={blurer}
                 placeholder={tagName} maxLength={5}/>
    </Wrapper>
  );
};

export {EditTag};