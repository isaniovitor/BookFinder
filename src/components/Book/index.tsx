import React from 'react';
import { Checkbox } from 'react-native-paper';

import { test } from '~/assets/incorrect.png';

import * as S from './styles';

interface ButtonProps {
  item?: any;
}

const Book: React.FC<ButtonProps> = ({ item }) => {
  return (
    <S.ItemListConteiner>
      <S.TouchableOpacity onPress={() => console.tron.log('deu')}>
        <S.ImageItem source={test} />
        <S.ResumeItemContainer>
          <S.NameItem>arroz</S.NameItem>
          <S.PriceItem>12 R$</S.PriceItem>
        </S.ResumeItemContainer>
      </S.TouchableOpacity>
      <Checkbox status="checked" onPress={() => console.tron.log('deu')} />
    </S.ItemListConteiner>
  );
};

export default Book;
