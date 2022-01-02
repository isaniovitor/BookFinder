import styled from 'styled-components/native';

export const ItemListConteiner = styled.View`
  flex-direction: row;
  align-items: center;
  background: yellow;

  /* justify-content: space-between; */
  padding-left: 5px;
  width: 90%;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageItem = styled.Image`
  width: 43px;
  height: 43px;
`;

export const ResumeItemContainer = styled.View`
  flex: 0.9;
  padding: 12px 0;
  margin-left: 5px;
`;

export const NameItem = styled.Text`
  font-size: 16px;
  /* font-weight: 700; */
`;

export const PriceItem = styled.Text`
  font-size: 14px;
  color: #8492a6;
`;
