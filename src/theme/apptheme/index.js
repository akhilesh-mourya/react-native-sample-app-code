import styled from 'styled-components/native';
import {space, layout, color} from 'styled-system';
import {StyleSheet} from 'react-native';
import {verticalScale} from '../../constants/scale';

export const Container = styled.View.attrs({})`
  ${space}
  ${layout}
`;

export const ContainerView = styled.View.attrs({})`
  ${space}
  ${layout}
`;

export const TouchableWrapper = styled.TouchableOpacity``;

export const Filler = styled.View.attrs({
  flex: 1,
})``;

export const TOP = styled.View`
  margin-top: ${(props) => (props.value ? verticalScale(props.value) : 0)};
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  draggableIcon: {
    backgroundColor: 'transparent',
  },
});

export const RowContainer = styled.View.attrs({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
})`
  ${space}
  ${color}
  ${layout}
`;
