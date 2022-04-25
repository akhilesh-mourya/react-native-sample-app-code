import React from 'react';
import {
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import * as CONST from '../../constants';

const Content = ({
  refreshControl,
  keyboard = 'padding',
  keyboardVerticalOffset = CONST.keyboardVerticalOffset,
  ref,
  ...props
}) => {
  return (
    <ScrollView
      ref={ref}
      refreshControl={refreshControl}
      bounces={false}
      style={styles.container}
      keyboardShouldPersistTaps={'handled'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={keyboard}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          {props.children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Content;
