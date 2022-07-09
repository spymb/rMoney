import styled from 'styled-components';
import {mainColor} from '../lib/color';

const Button = styled.button`
  font-size: 18px; border: none; padding: 8px 12px;
  background: ${mainColor}; border-radius: 4px;
  color: white;
`;

export {Button}