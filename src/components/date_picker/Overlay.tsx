import React, {FC, MouseEvent} from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  transform: translateZ(0);
`;

interface OverlayProps {
  visible: boolean;
  onClick: () => void;
}

const Overlay: FC<OverlayProps> = (props) => {
  const {visible, onClick, children} = props;

  const handleClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    onClick();
  };

  return (
    createPortal(
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={visible}
        classNames="fade"
        timeout={250}
      >
        <Wrapper onClick={handleClick}>
          {children}
        </Wrapper>
      </CSSTransition>, document.body
    )
  );
};

export default Overlay;