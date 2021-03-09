import axios from 'axios';
import { Dispatch } from 'redux'; // type definition for dispatch function
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
	// pass the dispatch function to the async function
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES //when the request is loading
		}); 

		try {
			const { data } = await axios.get('http://registry.npmjs.org/-/v1/search', {
				// params is going to take the query string into the url
				params: {
					text: term
				}
			});

			//array map method return a new array
			const names = data.objects.map((result: any) => {
				return result.package.name
			});

			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCESS,
				payload: names
			});
		} catch (err) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message
			})
		}
	};
};

// Rexdux Async Data Flow -> handle event('click') -> call dispatch() to 
// pass in something that middleware is looking for -> make an async call 
// when the dispatched value reaches the middleware -> disptach a real action object 
// when async call completes.