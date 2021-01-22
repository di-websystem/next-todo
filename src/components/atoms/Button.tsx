import styled from 'styled-components';
import COLOR from '../../const/color';

export type ButtonProps = {
  primary?: boolean;
};

const BasicButton = styled.button<ButtonProps>`
  color: ${(props) => (props.primary ? COLOR.FONT.PRIMARY : COLOR.FONT.BASIC)};
  background-color: ${(props) =>
    props.primary ? COLOR.BACKGROUND.PRIMARY : COLOR.BACKGROUND.BASIC};
  border: 1px solid ${(props) => (props.primary ? COLOR.BORDER.PRIMARY : COLOR.BORDER.BASIC)};
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <BasicButton {...props}>{children}</BasicButton>;
};
