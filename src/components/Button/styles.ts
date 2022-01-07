import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import Text from '../Text';

interface BottunProps {
  isDisabled: boolean;
}

export const Bg = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    theme.Colors.STRONG_ORANGE_BUTTON_BACKGROUND,
    theme.Colors.WEAK_ORANGE_BUTTON_BACKGROUND,
  ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}))`
  width: 100%;
  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity<BottunProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 45px;

  font-size: 20px;
  margin: 0 auto;
`;

export const TextButton = styled(Text).attrs(({ theme }) => ({
  fontSize: 20,
}))`
  color: ${({ theme }) => theme.Colors.BUTTON_WHITE_TEXT};
`;
