import styled from 'styled-components';

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
  background: #c4c4c4;
  font-size: 20px;
`;

export {Wrapper, Topbar}