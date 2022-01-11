import styled from 'styled-components/native';

import Text from '~/components/Text';

// containers
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND_WHITE};
`;

export const UpConteiner = styled.View`
  flex: 1;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
`;

// image
export const ContainerImage = styled.View`
  margin-top: 15px;
  width: 100%;
  align-items: center;
`;

// name info
export const ContainerNameInfo = styled.View`
  width: 100%;
`;

export const BookName = styled(Text).attrs({
  fontSize: 20,
})`
  color: ${({ theme }) => theme.Colors.BLACK_TO_WHITE_TEXT};
`;

export const Author = styled(Text).attrs({
  fontSize: 15,
})`
  color: ${({ theme }) => theme.Colors.GRAY};
`;

export const DescriptionText = styled(Text).attrs({
  fontSize: 15,
})`
  text-align: justify;
  padding: 20px 0;
  color: ${({ theme }) => theme.Colors.BLACK_TO_WHITE_TEXT};
`;

export const BookInfoContainer = styled.View``;
