import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  border-top: 1px solid #c4c4c4;
`;

type Props = {
  value: string
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  const notes = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Wrapper>
      <Input label="备注" type="text" value={notes} onChange = {onChange}
             placeholder="请在此输入" maxLength={32}/>
    </Wrapper>
  );

};

export {NotesSection};