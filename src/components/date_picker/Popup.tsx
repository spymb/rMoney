import styled from 'styled-components';
import Overlay from './Overlay';
import {CSSTransition} from "react-transition-group";
import {FC} from 'react';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: #fff;
  max-width: 450px;
  &.bottom {bottom: 0; left: 50%; transform: translate(-50%, 0%); }
`

interface PopUpProps {
  visible: boolean
  onCancel: () => void
}
const PopUp:FC<PopUpProps> = (props) => {
  const {visible, onCancel, children} = props

  return (
    <Overlay
      visible={visible}
      onClick={onCancel}
    >
      <CSSTransition in={visible} classNames='fade' timeout={250} appear>
        <Wrapper className='bottom'>{children}</Wrapper>
      </CSSTransition>
    </Overlay>
  )
}

export default PopUp