import styled, { keyframes } from 'styled-components';

const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`;

const Back = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #3e1e68;
  overflow: hidden;
`;

const Span = styled.span`
  width: 30vmin;
  height: 30vmin;
  border-radius: 30vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: ${move};
  animation-duration: 35;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const SpanA = styled(Span)`
  color: #e45a84;
  top: 52%;
  left: 37%;
  animation-duration: 63s;
  animation-delay: -2s;
  transform-origin: 22vw 19vh;
  box-shadow: -60vmin 0 8.316448791069831vmin currentColor;
`;

const SpanB = styled(Span)`
  color: #583c87;
  top: 78%;
  left: 10%;
  animation-duration: 144s;
  animation-delay: -139s;
  transform-origin: -10vw 24vh;
  box-shadow: -60vmin 0 8.001251481608858vmin currentColor;
`;

const SpanC = styled(Span)`
  color: #ffacac;
  top: 84%;
  left: 61%;
  animation-duration: 137s;
  animation-delay: -88s;
  transform-origin: 24vw -9vh;
  box-shadow: -60vmin 0 8.268362461584509vmin currentColor;
`;

const SpanD = styled(Span)`
  color: #e45a84;
  top: 26%;
  left: 16%;
  animation-duration: 76s;
  animation-delay: -4s;
  transform-origin: 5vw 1vh;
  box-shadow: -60vmin 0 7.691614525364407vmin currentColor;
`;

const SpanE = styled(Span)`
  color: #583c87;
  top: 59%;
  left: 8%;
  animation-duration: 56s;
  animation-delay: -109s;
  transform-origin: 2vw 23vh;
  box-shadow: 60vmin 0 8.407076192656346vmin currentColor;
`;

const Background: React.FC = () => {
  return (
    <Back>
      <SpanA />
      <SpanB />
      <SpanC />
      <SpanD />
      <SpanE />
    </Back>
  );
};

export default Background;
