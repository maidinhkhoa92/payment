import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';

import reducers from 'store/reducers';
import saga from 'store/saga';
import AppRouter from 'container/routes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
