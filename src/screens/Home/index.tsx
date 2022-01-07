import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';

import Book from '~/components/Book';
import Input from '~/components/Input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { xml } from '~/assets/index';
import { PROFILE_SCREEN } from '~/constants/routes';
import {
  getBooksAction,
  getBooksSuccessAction,
} from '~/store/ducks/books/actions';

import * as S from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const scrollY = useSharedValue(0);

  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const Fullwidth = Dimensions.get('window').width; // full width

  const { listBooks, loading } = useSelector(
    (state: AplicationState) => state.books,
  );

  function scrollHandler(scroll: number) {
    scrollY.value = scroll;
  }

  const headerStyle = useAnimatedStyle(() => {
    return {
      flex: interpolate(scrollY.value, [0, 180], [0.4, 0.2], Extrapolate.CLAMP),
    };
  });

  const listStyle = useAnimatedStyle(() => {
    return {
      width: Fullwidth,
      flex: interpolate(scrollY.value, [0, 180], [0.6, 0.8], Extrapolate.CLAMP),
    };
  });

  // const avatarStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: interpolate(
  //       scrollY.value,
  //       [100, 150],
  //       [1, 0],
  //       Extrapolate.CLAMP,
  //     ),
  //   };
  // });

  const handleViewProfile = useCallback(() => {
    navigation.navigate(PROFILE_SCREEN);
  }, [navigation]);

  function handleBooks(value: string, index: number) {
    if (search === '') {
      dispatch(getBooksSuccessAction([]));
    } else {
      dispatch(getBooksAction(value, index));
    }
  }

  useEffect(() => {
    navigation.setOptions({
      iconProfile: true,
      iconProfileAction: handleViewProfile,
    });
  }, [navigation, handleViewProfile]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <S.Container>
        <Animated.View style={headerStyle}>
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
              iconLeft="search"
              iconType="ionicons"
              placeholder="Digite o nomde de um livro"
              value={search}
              onSubmitEditing={() => {
                handleBooks(search, 0);
                scrollHandler(0);
              }}
              onChangeText={value => setSearch(value)}
              width={100}
            />
          </S.SearchConteiener>
        </Animated.View>
        <Animated.View style={listStyle}>
          <S.BooksConteiener>
            {listBooks.length === 0 ? (
              <S.ImageContainer>
                <SvgXml xml={xml} width="80%" height="80%" />
              </S.ImageContainer>
            ) : (
              <FlatList
                onScroll={e => {
                  scrollHandler(e.nativeEvent.contentOffset.y);
                }}
                // scrollEventThrottle 1000/60 = 16
                scrollEventThrottle={16}
                style={{ margin: 20 }}
                data={listBooks}
                extraData={listBooks}
                renderItem={({ item }) => <Book item={item} />}
                keyExtractor={(itemCategory: any, index: any) => index}
                refreshing={loading}
                onRefresh={() => handleBooks(search, listBooks.length)}
                onEndReached={() => handleBooks(search, listBooks.length)}
                onEndReachedThreshold={0.1}
              />
            )}
          </S.BooksConteiener>
        </Animated.View>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
