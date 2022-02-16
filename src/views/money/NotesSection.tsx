import styled from 'styled-components';
import React, {useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;

type Props = {
  value: string
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  const notes = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };

  return (
    <Wrapper>
      <Input label="备注" type="text" defaultValue={notes} onBlur={onBlur}
             placeholder="请填写备注"/>
    </Wrapper>
  );

};

export {NotesSection};