import { useDispatch } from 'react-redux';
// { useDispatch } gives the dispatch function that we can use inside a component
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
    // the first arguement of bindActionCreators is an action creator 
    // or an object whose values are action creators
} 