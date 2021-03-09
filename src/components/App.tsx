import { Provider } from 'react-redux'; 
// makes the Redux store available to any nested components that
// have been wrapped in the connect() function 
// most applications will render a <Provider> at the top level
// with the entire app's component tree inside of it
// so that all the components are connected and nested 
import { store } from '../state'; // will check the index file of folder state
import RepositoriesList from './RepositoriesList';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search For a Package</h1>
                <RepositoriesList />
            </div>
        </Provider>
    );
};

export default App;

