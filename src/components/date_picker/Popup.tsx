import styled from 'styled-components';
import classNames from 'classnames';
import Overlay from './Overlay';
import {CSSTransition} from "react-transition-group";
import {FC} from 'react';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: #fff;
  max-width: 420px;
  &.bottom {bottom: 0; left: 50%; transform: translate(-50%, 0%); }
`

type PopUpPosition = 'top' | 'left' | 'right' | 'bottom' | 'center';

interface PopUpProps {
  show: boolean
  position?: PopUpPosition
  duration?: number
  height?: string
  onCancel?: () => void
}
const PopUp:FC<PopUpProps> = (props) => {
  const {show, onCancel, position = 'center', duration = 250, children} = props
  const popupClass = classNames({
    [position]: position
  })
  let animateName:string
  if (position !== 'center') {
    animateName = `slide-from-${position}`
  } else {
    animateName = 'fade'
  }
  return (
    <Overlay
      show={show}
      onClick={onCancel}
    >
      <CSSTransition in={show} classNames={animateName} timeout={duration} appear>
        <Wrapper className={popupClass}>{children}</Wrapper>
      </CSSTransition>
    </Overlay>
  )
}

export default PopUp