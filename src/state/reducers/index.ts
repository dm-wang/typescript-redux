import { combineReducers } from 'redux';
import repositoriesReducers from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducers, 
    // respositories is the key and repositoriesReducers
    // gives the value which is an object
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
// take the reducers function and give us back the type pf whatever
// this reducers funtion returns and then assign this type to RootState
// RootState then show the type of data that is going to inside the Redux store