import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer'
import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension'//试调工具

//创建store
// const store = createStore(reducer, composeWithDevTools(
//     applyMiddleware(thunk,logger)
// ));

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));
export default store