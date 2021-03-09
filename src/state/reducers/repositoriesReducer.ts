import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
	data: string[];
	loading: boolean;
	error: string | null;
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
	state: RepositoriesState = initialState, 
	action: Action
): RepositoriesState => {
	// if (action.type === 'search_repositories_success') {} 
	// -> type guard (100% certainty that 'action' satisfies the 
	// SearchRepositoriesSuccessAction interface)
	// switch statements function as type guards in typescript
 	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data:[] }   //return an object of states
		case ActionType.SEARCH_REPOSITORIES_SUCESS:
			// 100% certanty that 'action' is SearchRepositoriesSuccessAction
			return { loading: false, error: null, data: action.payload}
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] }
		default:
			return state;
	}

};

export default reducer;


// Define the initial state
// Define the return value of reducer 
// Define the type of action -> define each action a interface -> combine them to one interface
// Use enum to replace all the raw string of action to a variable -> avoid making typo mistakes