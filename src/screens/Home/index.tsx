import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';

import Input from '~/components/Input';

import { xml } from '~/assets/index';
import { HOME_SCREEN } from '~/constants/routes';
import { getBooksAction } from '~/store/ducks/books/actions';

import * as S from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  function handleBooks() {
    dispatch(getBooksAction(search, 0));
  }

  const handleViewProfile = useCallback(() => {
    navigation.navigate(HOME_SCREEN);
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      iconProfile: true,
      iconProfileAction: handleViewProfile,
    });
  }, [navigation, handleViewProfile]);

  return (
    <S.Container>
      <S.SearchConteiener>
        <S.HeroConteiener>
          <S.TextConteiener>
            <S.WelcomeText>Isanio,</S.WelcomeText>
            <S.WelcomeText>Bem vindo!</S.WelcomeText>
          </S.TextConteiener>
          <S.BookConteiner>
            <S.BookIcon />
          </S.BookConteiner>
        </S.HeroConteiener>

        <Input
          // title="oiolaaa"

          iconLeft="search"
          iconType="ionicons"
          placeholder="Digite o nomde de um livro"
          value={search}
          onChangeText={value => {
            setSearch(value);
            handleBooks();
          }}
          width={100}
        />
      </S.SearchConteiener>
      <S.BooksConteiener>
        <S.ImageContainer>
          <SvgXml xml={xml} width="80%" height="80%" />
        </S.ImageContainer>
        {/* <Book />
        <Book />
        <Text>Books</Text> */}
      </S.BooksConteiener>
    </S.Container>
  );
};

export default Home;
