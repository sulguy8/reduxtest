import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'; 
// 리액트 리덕스를 쓰기 위해서
// 리덕스를 쓸 때 store를 일일히 써줬던 수고를 덜어줄 수 있다.
import store from './store';

ReactDOM.render(
  // provider의 하위에 있는 모든 컴포넌트는 import를 안해도 영향을 받게 된다.
  <Provider store={store}>  
    <App />
  </Provider>
  ,document.getElementById('root')
);

serviceWorker.unregister();
