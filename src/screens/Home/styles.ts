import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import Text from '~/components/Text';

// Conteiner
export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    theme.Colors.STRONG_ORANGE_BACKGROUND,
    theme.Colors.WEAK_ORANGE_BACKGROUND,
  ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// Search section
export const SearchConteiener = styled.View`
  /* flex: 0.4; */
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
`;

export const HeroConteiener = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;

  flex-direction: row
  width: 100%;
`;

export const BookConteiner = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.5;

  width: 100%;
`;

export const TextConteiener = styled.View`
  /* justify-content: center;
  align-items: center; */
  flex: 0.5;
  padding-left: 15px;
  width: 100%;
`;

export const WelcomeText = styled(Text).attrs(({ theme }) => ({
  fontSize: 30,
}))`
  text-align: left;
  color: white;
  font-weight: bold;
`;

export const BookIcon = styled(Icon).attrs(({ theme }) => ({
  type: 'ionicons',
  name: 'book',
  color: theme.Colors.WHITE,
  size: 100,
}))`
  color: ${({ theme }) => theme.Colors.WHITE};
`;

// Books section
export const BooksConteiener = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.Colors.BACKGROUND_GRAY};
  border-top-left-radius: 50px;

  /* background: yellow; */

  width: 100%;
`;

export const ImageContainer = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Image = styled.Image`
  /* flex: 0.5;
  justify-content: center;
  align-items: center;
  background-color: orange; */

  width: 100px;
  height: 100px;
`;

export const OrengeText = styled(Text).attrs(({ theme }) => ({
  fontSize: 16,
}))`
  color: #ff7b00;
`;
