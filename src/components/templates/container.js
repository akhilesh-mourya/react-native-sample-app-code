import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Block} from 'galio-framework';
import Content from './content';
import {dark} from '../../theme/colors';

const Container = ({
  header,
  body,
  footer,
  style = {},
  footerStyle = {},
  autoScroll = true,
  refreshControl,
  color = dark.buttonBlack,
  ref,
  keyboard,
}) => {
  return (
    <Block flex={1}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.25, y: 1.1}}
        locations={[0.2, 1]}
        colors={[color, color]}
        style={[styles.container, style]}>
        {header}
        {autoScroll ? (
          <Content
            ref={ref}
            refreshControl={refreshControl}
            keyboard={keyboard}>
            {body}
          </Content>
        ) : (
          body
        )}
        <Block style={[styles.footer, footerStyle]}>{footer}</Block>
      </LinearGradient>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 35,
  },
});
export default Container;
