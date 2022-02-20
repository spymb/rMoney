import styled from 'styled-components';
import {ChangeEvent, FC} from 'react';
import Icon from '../../../components/Icon';

const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
`
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: red;
  > .icon {
    fill: #fff;
  }
`
const NameInput = styled.input`
  width: 0;
  flex: 1;
  border: none;
  outline: none;
  text-align: right;
  line-height: 24px;
  font-size: 20px;
`

interface Props {
  name: string
  icon: string
  onChange?: (name: string) => void
}

const EditTag: FC<Props> = (props) => {
  const {name, icon, onChange} = props
  const handleChange = (e: ChangeEvent) => {
    onChange && onChange((e.target as HTMLInputElement).value)
  }
  return (
    <Wrapper>
      <IconWrapper>
        <Icon className="icon" size="24px" id={icon}/>
      </IconWrapper>

      <NameInput type="text" value={name} onChange={handleChange} placeholder="标签名称"/>
    </Wrapper>
  )
}

export {EditTag}