import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// 配置store -> createStore(reducers, [preloadedState], [enhancer])
// 里面放入写好的reducers和initial state，以及要用的中间件
export const store = createStore(reducers, {}, applyMiddleware(thunk));

  