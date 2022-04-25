import React from 'react';
import {Touchable, Container, Text, TextXxL} from './styles';

const ButtonNew = ({text, onPress, ...restProps}) => {
  return (
    <Touchable onPress={onPress}>
      <Container {...restProps}>
        <Text text={text} />
      </Container>
    </Touchable>
  );
};

export const CommonButton = ({
  text,
  onPress,
  color,
  disable = false,
  ...restProps
}) => {
  return (
    <Touchable onPress={onPress} disabled={disable}>
      <Container {...restProps}>
        <TextXxL text={text} color={color} />
      </Container>
    </Touchable>
  );
};

export default ButtonNew;
