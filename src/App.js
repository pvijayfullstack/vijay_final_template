import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { configureStore } from './reducers'

import Executive from './Executive'

const store = configureStore()

 const App = () => {
   return(
    <Provider store={store}>
      <Executive />
    </Provider>
   )
}

export default hot(App);