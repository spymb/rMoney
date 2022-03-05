import styled from 'styled-components';
import {mainColor} from '../../../color';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 20px;
  background: ${mainColor};
  font-size: 20px;
  color: white;
  > .icon {
    fill: white;
  }
`;

export {Wrapper, Topbar}