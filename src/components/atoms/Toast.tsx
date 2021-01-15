import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

const Toast = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  top: 64px;
  left: 50%;
  z-index: 9999;
  max-width: 800px;
  width: calc(100% - 32px);
  background-color: rgba(103, 194, 58, 0.3);
  color: #48c709;
  border: 1px solid rgba(64, 158, 255, 0.2);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 8px 16px;
  overflow: hidden;
  box-sizing: border-box;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: 0.6s;
  transform: translate(-50%, ${({ state }) => (state === 'entered' ? '0%' : '-100%')});
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  display: ${({ state }) => (state === 'exited' ? 'none' : 'block')};
`;

export default Toast;
