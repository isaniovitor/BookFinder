import styled from 'styled-components/native';

import Text from '~/components/Text';

export const ItemListConteiner = styled.View`
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};

  /* justify-content: space-between; */
  border-radius: 15px;
  padding-left: 5px;
  margin: 5px 0;
  width: 98%;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const ImageItem = styled.Image`
  width: 70px;
  height: 70px;
`;

export const ResumeItemContainer = styled.View`
  margin: 5px;
  width: 80%;
`;

export const NameItem = styled(Text).attrs(({ theme }) => ({
  fontSize: 16,
}))``;

export const PriceItem = styled(Text).attrs(({ theme }) => ({
  fontSize: 14,
}))`
  color: #8492a6;
`;
