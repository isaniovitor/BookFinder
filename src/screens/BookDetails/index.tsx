import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Linking } from 'react-native';

import Button from '~/components/Button';

import * as S from './styles';

const BookDetails: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { book }: any = route.params;

  let authorDisplay = '';
  if (book?.volumeInfo?.authors?.length) {
    authorDisplay = book.volumeInfo.authors?.join('; ');
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.BookInfoContainer>
        {book?.volumeInfo?.imageLinks?.thumbnail && (
          <S.ContainerImage>
            <Image
              style={{
                width: 250,
                height: 350,
                borderRadius: 20,
                marginBottom: 10,
              }}
              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
            />
          </S.ContainerImage>
        )}

        <S.UpConteiner>
          <S.ContainerNameInfo>
            <S.BookName>{book.volumeInfo.title}</S.BookName>
            <S.Author>{authorDisplay || 'Não informado'}</S.Author>
          </S.ContainerNameInfo>
          <S.DescriptionText>
            {book.volumeInfo.description
              ? book.volumeInfo.description
              : 'Não informada'}
          </S.DescriptionText>

          <Button
            label="Saiba Mais"
            actionBtn={() => {
              Linking.openURL(book.volumeInfo.infoLink);
            }}
          />
        </S.UpConteiner>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default BookDetails;
