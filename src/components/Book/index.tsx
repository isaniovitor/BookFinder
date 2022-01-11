import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Linking } from 'react-native';

import type { BookProps } from '~/@types/entities/book';
import { BOOKDETAILS_SCREEN } from '~/constants/routes';

import * as S from './styles';

interface ButtonProps {
  item: BookProps;
}

const Book: React.FC<ButtonProps> = ({ item }) => {
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate(BOOKDETAILS_SCREEN, { book: item });
  }

  // Linking.openURL(item.volumeInfo.infoLink);
  return (
    <S.ItemListConteiner>
      <S.TouchableOpacity onPress={() => handleDetails()}>
        {item.volumeInfo.imageLinks.smallThumbnail !== undefined && (
          <S.ImageItem
            source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }}
          />
        )}
        <S.ResumeItemContainer>
          {item.volumeInfo.title && (
            <S.NameItem>{item.volumeInfo.title}</S.NameItem>
          )}
          {item.volumeInfo.authors && (
            <S.PriceItem>{item.volumeInfo.authors}</S.PriceItem>
          )}
        </S.ResumeItemContainer>
      </S.TouchableOpacity>
    </S.ItemListConteiner>
  );
};

export default Book;
