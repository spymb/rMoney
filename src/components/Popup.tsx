import styled from 'styled-components';
import Overlay from './Overlay';
import {CSSTransition} from "react-transition-group";
import {FC} from 'react';
import classNames from 'classnames';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: #fff;
  max-width: 450px;
  &.bottom {bottom: 0; left: 50%; transform: translate(-50%, 0%); }
  &.center { top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 250px;}
`

interface PopUpProps {
  position: 'bottom' | 'center'
  visible: boolean
  onCancel: () => void
}
const PopUp:FC<PopUpProps> = (props) => {
  const {visible, onCancel, children, position} = props
  const popupClass = classNames({
    [position]: position
  })

  return (
    <Overlay
      visible={visible}
      onClick={onCancel}
    >
      <CSSTransition in={visible} classNames='fade' timeout={250} appear>
        <Wrapper className= {popupClass}>{children}</Wrapper>
      </CSSTransition>
    </Overlay>
  )
}

export default PopUp