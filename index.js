/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {ThemeProvider} from 'styled-components';
import {GalioProvider} from 'galio-framework';
import branch from 'react-native-branch';
import App from './src/App';
import {name as appName} from './app.json';
import themes from './src/theme';
import materialTheme from './src/constants/theme';
import createStore from './src/reducers';

// TODO delete this
branch.subscribe(({error, params, uri}) => {
  if (error) {
    console.error('Error from Branch: ' + error);
    return;
  }
  // TODO handle deeplinks here
});

const {store, persistor} = createStore();

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={themes.dark}>
      <PersistGate loading={null} persistor={persistor}>
        <GalioProvider theme={materialTheme}>
          <App />
        </GalioProvider>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
