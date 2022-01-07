import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Linking } from 'react-native';
import { Checkbox } from 'react-native-paper';

import type { BookProps } from '~/@types/entities/book';
import { test } from '~/assets/incorrect.png';
import { HOME_SCREEN, WEB_SCREEN } from '~/constants/routes';

import * as S from './styles';

interface ButtonProps {
  item: BookProps;
}

const Book: React.FC<ButtonProps> = ({ item }) => {
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate(WEB_SCREEN, { book: item });
  }

  return (
    <S.ItemListConteiner>
      <S.TouchableOpacity
        onPress={() => {
          Linking.openURL(item.volumeInfo.infoLink);
        }}
      >
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
