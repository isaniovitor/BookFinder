import { reduce } from 'lodash';
import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import Text from '~/components/Text';

interface IconInputProps {
  name: string;
  iconType?: string;
}

interface ContainerProps {
  labelSameLine?: boolean;
}

interface ContainerInputProps {
  error: string;
  labelSameLine?: boolean;
}

interface TextInputProps {
  customFontSize: number;
  iconRight?: string;
}

export const styles = StyleSheet.create({
  UpContainer: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.3,

    elevation: 10,
  },
});

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  border-radius: 50px;
  background: white;
`;

export const Touchable = styled.TouchableOpacity``;

export const Label = styled(Text).attrs(({ theme }) => ({
  fontSize: 12,
}))`
  color: ${({ theme }) => theme.Colors.SECONDARY_LIGHT_GRAY};
`;

export const Title = styled(Text).attrs(({ theme }) => ({
  fontSize: 16,
}))`
  padding-top: 10px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const ContainerInput = styled.View<ContainerInputProps & ContainerProps>`
  flex-direction: row;
  margin-top: ${({ labelSameLine }) => (labelSameLine ? 0 : 10)}px;
  margin-left: ${({ labelSameLine }) => (labelSameLine ? 15 : 0)}px;
  width: ${({ labelSameLine }) => (labelSameLine ? '65%' : '100%')};
  justify-content: space-between;
  align-items: center;

  /* width: 100%; */
`;

export const Container = styled.View<ContainerProps>`
  width: 93%;
  flex-direction: ${({ labelSameLine }) => (labelSameLine ? 'row' : 'column')};
  align-items: ${({ labelSameLine }) =>
    labelSameLine ? 'center' : 'flex-start'};
  justify-content: center;
`;

export const Input = styled.TextInput.attrs<TextInputProps>(
  ({ customFontSize, theme }) => ({
    fontSize: customFontSize,
    placeholderTextColor: theme.Colors.GRAY,
  }),
)<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  /* font-size: 12px; */
  color: ${({ theme }) => theme.Colors.WHITE};
  margin-bottom: ${vs(10)}px;
  margin-left: 10px;
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.Colors.ERROR};
  /* text-align: start; */
  /* margin-left: 30px; */
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ theme, name, iconType }) => ({
    name,
    size: 24,
    type: iconType,
    color: theme.Colors.MEDIUM_GRAY,
  }),
)<IconInputProps>``;
