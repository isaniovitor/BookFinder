import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import Text from '../Text';

interface BottunProps {
  isDisabled: boolean;
}

export const Bg = styled(LinearGradient).attrs({
  colors: ['#ff7b00', '#ffae00'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  width: 100%;
  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity<BottunProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 45px;

  /* background: yellow; */
  /* background: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.Colors.MEDIUM_GRAY
      : theme.Colors.BACKGROUND_BUTTON_WHITE}; */

  font-size: 20px;
  margin: 0 auto;
`;

export const TextButton = styled(Text).attrs(({ theme }) => ({
  fontSize: 20,
}))`
  color: ${({ theme }) => theme.Colors.WHITE};
`;
