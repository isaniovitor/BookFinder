import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import Icon from '~/components/Icon';

// import Text from '~/components/Text';

// Conteiner
export const Container = styled(LinearGradient).attrs({
  colors: ['#ff7b00', '#ffae00'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// Search section
export const SearchConteiener = styled.View`
  flex: 0.4;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
`;

export const HeroConteiener = styled.View`
  justify-content: center;
  align-items: center;
  flex: .6;

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

export const WelcomeText = styled.Text`
  text-align: left;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

export const BookIcon = styled(Icon).attrs(({ theme }) => ({
  type: 'ionicons',
  name: 'book',
  color: theme.Colors.BACKGROUND_BUTTON_WHITE,
  size: 100,
}))`
  color: ${({ theme }) => theme.Colors.WHITE};
`;

// Books section
export const BooksConteiener = styled.View`
  flex: 0.6;
  justify-content: space-evenly;
  align-items: center;

  background: white;
  border-top-left-radius: 50px;

  /* background: yellow; */

  width: 100%;
`;

export const ImageContainer = styled.View`
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
